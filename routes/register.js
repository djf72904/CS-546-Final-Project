import express from 'express';
import {createProfileFromUser} from "../scripts/db/config/triggers.js";
import {createSecretToken, hashPassword} from "../scripts/handlers/authHandlers.js";
import {User} from "../scripts/db/config/schema.js";
import {authHandlers} from "../middleware.js";
let router = express.Router();

/* GET users listing. */
router.get('/', authHandlers, function(req, res, next) {
  res.render('register');
});

router.post('/', authHandlers,  async (req, res) => {
  const { display_name, email, password } = req.body;

  try {
    const user = await User.findOne({ email }).exec();
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }
  } catch {
    return res.status(400).json({ message: 'Error creeating user' });
  }

  try {
    if (!password) 
      throw 'Error: Password must be input.';
    if (typeof password !== 'string') 
      throw 'Error: Input password must be a string.';
    if (/\s/.test(password)) 
      throw 'Error: Input password cannot contain spaces.';
    if (password.length < 8) 
      throw 'Error: Input password must be at least 8 characters long.';
    if (!/[A-Z]/.test(password)) 
      throw 'Error: Input password must contain at least one uppercase letter.';
    if (!/\d/.test(password)) 
      throw 'Error: Input password must contain at least one number.';
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) 
      throw 'Error: Input password must contain at least one special character.';
    const encryptedPassword = hashPassword(password);
  } 
  catch{
    return "error"
  }
  

  const newUser = new User({ password: encryptedPassword, email });
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