import express from 'express';
import {createProfileFromUser} from "../scripts/db/config/triggers.js";
import {createSecretToken, hashPassword} from "../scripts/handlers/authHandlers.js";
import {User} from "../scripts/db/config/schema.js";
let router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('register');
});

router.post('/', async (req, res) => {
  const { display_name, email, password } = req.body;

  try {
    const user = await User.findOne({ email }).exec();
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }
  } catch {
    return res.status(400).json({ message: 'User already exists' });
  }

  const encryptedPassword = await hashPassword(password);

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

  return res.status(201).json(newUser);
});

export default router;