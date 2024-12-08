import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import indexRouter from './routes/index.js';
import loginRouter from './routes/login.js';
import profileRouter from './routes/profile.js';
import registerRouter from './routes/register.js';
import leaderboardRouter from './routes/leaderboard.js';
import testsRouter from './routes/tests.js';
import feedRouter from './routes/feed.js';
import settings from './routes/songs.js';
import './scripts/handlers/authHandlers.js';
import isUserLoggedIn, {protectedRoutes, routerInfo} from "./middleware.js";
import connectToDatabase from "./config/mongoConnection.js";
import {handleMiddleware, handleRoutes} from "./scripts/handlers/expressHandlers.js";
import userRouter from "./routes/api/user.js";


let app = express();

const __dirname = path.resolve();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

handleMiddleware(app, routerInfo, isUserLoggedIn, protectedRoutes);


handleRoutes(app, [
    ['/', indexRouter],
    ['/login', loginRouter],
    ['/register', registerRouter],
    ['/profile', profileRouter],
    ['/leaderboard', leaderboardRouter],
    ['/feed', feedRouter],
    ['/test', testsRouter],
    ['/profile/songs', settings],
    // api route
    ['/api/user', userRouter],
    ['/logout', (req, res) => {
        res.clearCookie("token");
        res.redirect('/');
    }],
]);





await connectToDatabase();


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