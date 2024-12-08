import express from "express";
import {getProfile} from "../../scripts/db/data/profiles.js";
import jwt from "jsonwebtoken";

const router = express.Router();

router.get('/', async (req, res) => {
    const profile = await getProfile(req.user);
    res.json(profile);
});

export default router;