const eventModelSrc = '../../models/event.model';
const eventControllerSrc = '../../controllers/event.controller';

exports.mockEventModelSuccess = () => {
    jest.mock(
        eventModelSrc,
        () =>
            class Event {
                constructor({ firstName }) {
                    this.firstName = firstName;
                }

                save(cb) {
                    return cb();
                }

                static find(cb) {
                    return cb(null, [{ firstName: 'name1' }, { firstName: 'name2' }]);
                }

                static findById(_id, cb) {
                    return cb(null, new Event({ firstName: 'name' }));
                }

                static findByIdAndRemove(_id, cb) {
                    return cb();
                }
            },
    );

    return require(eventControllerSrc);
};

exports.mockEventModelError = () => {
    jest.mock(
        eventModelSrc,
        () =>
            class Event {
                save(cb) {
                    return cb({ message: 'err' });
                }

                static find(cb) {
                    return cb({ message: 'err' });
                }

                static findById(_id, cb) {
                    return cb({ message: 'err' });
                }

                static findByIdAndRemove(_id, cb) {
                    return cb({ message: 'err' });
                }
            },
    );

    return require(eventControllerSrc);
};
