module.exports = function(validationSchema) {
    return function(req, res, next) {
        validationSchema
            .validate(req.body)
            .then(() => next())
            .catch(err => res.send(err));
    };
};
