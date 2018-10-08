const express = require('express');

const applicationRouter = require('./application.route');

const router = express.Router();

router.use('/application', applicationRouter);

module.exports = router;
