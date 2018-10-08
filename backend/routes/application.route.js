const express = require('express');

const application = require('../controllers/application.controller');

const router = express.Router();

router.route('/').post(application.create);
router.route('/').get(application.getAll);
router.route('/:id').get(application.get);
router.route('/:id').put(application.update);
router.route('/:id').delete(application.delete);

module.exports = router;
