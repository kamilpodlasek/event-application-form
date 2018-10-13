const _ = require('lodash');

const Event = require('../models/event.model');
const validationMiddleware = require('../middlewares/validationMiddleware');
const { eventValidationSchema } = require('common');

exports.validate = validationMiddleware(eventValidationSchema);

exports.create = (req, res) => {
    const event = new Event(pickEventFields(req.body));

    event.save(err => {
        if (err) return res.status(400).send(err);

        res.send({ message: 'Event application saved!' });
    });
};

exports.getAll = (req, res) => {
    Event.find((err, events) => {
        if (err) return res.status(400).send(err);

        res.send(events);
    });
};

exports.getOne = (req, res) => {
    Event.findById(req.params.id, (err, event) => {
        if (err) return res.status(400).send(err);

        res.send(event);
    });
};

exports.update = (req, res) => {
    Event.findById(req.params.id, (err, event) => {
        if (err) return res.status(400).send(err);

        _.merge(event, pickEventFields(req.body));

        event.save(err => {
            if (err) return res.status(400).send(err);

            res.send({ message: 'Event application updated!' });
        });
    });
};

exports.delete = (req, res) => {
    Event.findByIdAndRemove(req.params.id, err => {
        if (err) return res.status(400).send(err);

        res.send({ message: 'Event application deleted!' });
    });
};

function pickEventFields(object) {
    return _.pick(object, ['firstName', 'lastName', 'email', 'date']);
}
