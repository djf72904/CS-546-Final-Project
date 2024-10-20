import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import indexRouter from './routes/index.js';
import usersRouter from './routes/users.js';
import loginRouter from './routes/login.js';
import registerRouter from './routes/register.js';
import './scripts/authHandler.js';
import { userSchema } from './scripts/schema.js';
import {comparePassword, createSecretToken, hashPassword} from "./scripts/authHandler.js";
import {authChecker, authSendHandler, routerInfo} from "./middleware.js";



let app = express();

const __dirname = path.resolve();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//middleware
app.use(routerInfo);
app.use(authSendHandler);
// app.use(authChecker);

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);

mongoose.connect("mongodb://localhost:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.3.1");
const database = mongoose.connection;

database.on('error', (error) => {
  console.log(error)
})

database.once('connected', () => {
  console.log('Database Connected');
})

const User = mongoose.model('User', userSchema);

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if(!email || !password){
    return res.status(400).json({ message: 'Please enter email and password' });
  }

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(401).json({ message: 'User not found', success: false });
  }
  if (!await comparePassword(password, user.password)) {
    return res.status(401).json({ message: 'Incorrect password', success: false });
  }

  const token = createSecretToken(user._id);

  res.cookie("token", token, {
    path: "/",
    expires: new Date(Date.now() + 86400000),
    secure: false,
    httpOnly: true,
  });

  return res.status(200).json({token, success: true});
});

app.post('/register', async (req, res) => {
  const { username, password, email } = req.body;
  try{
    const user = await User.findOne({ username, email });
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }
  }
  catch{
    return res.status(400).json({ message: 'User already exists' });
  }

  const encryptedPassword = await hashPassword(password);

  const newUser = new User({ username, password: encryptedPassword, email });
  await newUser.save();

  const token = createSecretToken(newUser._id);

  res.cookie("token", token, {
    path: "/",
    expires: new Date(Date.now() + 86400000),
    secure: false,
    httpOnly: true,
  });

  return res.status(201).json(newUser);

});

app.get("/logout", (req, res) => {
  res.clearCookie("token");
  res.redirect('/');
});



app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res['locals']['message'] = err?.message;
  res['locals']['error'] = req.app.get('env') === 'development' ? err : {};

  res?.status(err?.status || 500);
  res?.render('error');
});

export default app;