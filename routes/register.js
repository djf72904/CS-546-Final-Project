import express from 'express';
import {createProfileFromUser} from "../scripts/db/config/triggers.js";
import {createSecretToken, hashPassword} from "../scripts/handlers/authHandlers.js";
import {User} from "../scripts/db/config/schema.js";
import {authHandlers} from "../middleware.js";
import { validateUserName, validatePassword } from '../scripts/validators/register.js';
let router = express.Router();
import { v4 as uuidv4 } from 'uuid';

/* GET users listing. */
router.get('/', authHandlers, function(req, res, next) {
  res.render('register');
});

router.post('/', authHandlers,  async (req, res) => {
  const { display_name, email, password } = req.body;

  try {
    const user = await User.findOne({ email }).exec();
    const userName = await User.findOne({ _id }).exec();
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }
    if (userName) {
      return res.status(400).json({ message: 'Username taken' });
    }
  } catch {
    return res.status(400).json({ message: 'Error creating user' });
  }

  try {
    validateUserName(display_name);
  } 
  catch (error) {
    return res.status(400).json({ message: error.message });
  }

  try {
    validatePassword(password);
  } 
  catch (error) {
    return res.status(400).json({ message: error.message });
  }

  const encryptedPassword = hashPassword(password);

  const newUser = new User({ _id: uuidv4().toString(), password: encryptedPassword, email });
  await newUser.save();

  const token = createSecretToken(newUser._id);

  res.cookie("token", token, {
    path: "/",
    expires: new Date(Date.now() + 86400000),
    secure: false,
    httpOnly: true,
  });

  // if this function fails, rollback the user creation and return the error
  await createProfileFromUser(newUser._id, display_name);
  //res.render('login', { title: 'Login', user: null });
  return res.status(201).json({success: true});
});

export default router;