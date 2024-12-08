import express from "express";
let router = express.Router();

router.get('/', async function(req, res, next) {
    res.render('test');
});

router.post('/test', async function(req, res, next) {
    //TODO: Add test to DB
});

export default router;