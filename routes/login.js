import express from 'express';
import {User} from "../scripts/db/config/schema.js";
import {comparePassword, createSecretToken} from "../scripts/handlers/authHandlers.js";
import app from "../app.js";
import {getProfile} from "../scripts/db/data/profiles.js";
let router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('login');
});

router.post('/', async (req, res) => {
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

  const profile = await getProfile(user._id);

  res.locals.user = profile;

  return res.status(200).json({token, success: true, profile});
});


export default router;