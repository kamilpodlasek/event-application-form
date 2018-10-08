const _ = require('lodash');

const Application = require('../models/application.model');

exports.create = (req, res) => {
    const application = new Application(pickApplicationFields(req.body));

    application.save(function(err) {
        if (err) return res.send(err);

        res.send({ message: 'Application saved!' });
    });
};

exports.getAll = (req, res) => {
    Application.find((err, applications) => {
        if (err) return res.send(err);

        res.send(applications);
    });
};

exports.get = (req, res) => {
    Application.findById(req.params.id, (err, application) => {
        if (err) return res.send(err);

        res.send(application);
    });
};

exports.update = (req, res) => {
    Application.findById(req.params.id, (err, application) => {
        if (err) return res.send(err);

        _.merge(application, pickApplicationFields(req.body));

        application.save(err => {
            if (err) return res.send(err);

            res.send({ message: 'Application updated!' });
        });
    });
};

exports.delete = (req, res) => {
    Application.findByIdAndRemove(req.params.id, err => {
        if (err) return res.send(err);

        res.send({ message: 'Application deleted!' });
    });
};

function pickApplicationFields(object) {
    return _.pick(object, ['firstName', 'lastName', 'email', 'date']);
}
