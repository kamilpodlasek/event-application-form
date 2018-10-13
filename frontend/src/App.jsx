import React from 'react';
import { connect } from 'react-redux';

import { EventForm } from './event/components/EventForm';
import { createEventRequest } from './event/actions/eventActions';

const AppComponent = ({ eventValues, createEventRequest }) => (
    <div className="container">
        <EventForm values={eventValues} submitForm={createEventRequest} />
    </div>
);

export const App = connect(
    state => ({ eventValues: state.event }),
    { createEventRequest },
)(AppComponent);
