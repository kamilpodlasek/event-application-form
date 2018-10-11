const express = require('express');

const event = require('../controllers/event.controller');

const router = express.Router();

router.route('/').post(event.create);
router.route('/').get(event.getAll);
router.route('/:id').get(event.get);
router.route('/:id').put(event.update);
router.route('/:id').delete(event.delete);

module.exports = router;
