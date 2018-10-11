const express = require('express');

const eventRouter = require('./event.route');

const router = express.Router();

router.use('/event', eventRouter);

module.exports = router;
