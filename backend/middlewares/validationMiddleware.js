module.exports = function(validationSchema) {
    return function(req, res, next) {
        return validationSchema
            .validate(req.body)
            .then(() => next())
            .catch(err => res.status(400).send(err));
    };
};
