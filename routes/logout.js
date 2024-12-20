import express from 'express';
let logoutRouter = express.Router();

logoutRouter.get("/logout", (req, res) => {
    res.clearCookie("token");
    res.redirect('/');
});

export default logoutRouter;