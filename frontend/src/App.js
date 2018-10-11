import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, DatePicker, Input } from 'antd';

import { createEventRequest } from './event/actions/eventActions';
import './App.css';
import 'antd/dist/antd.css';

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    date: '',
};

class AppContainer extends Component {
    state = initialState;

    handleInput = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleDate = (_dateMoment, date) => {
        this.setState({ date });
    };

    handleSubmit = () => {
        this.props.createEventRequest(this.state);
    };

    render() {
        return (
            <div className="container">
                <Input name="firstName" value={this.state.firstName} onChange={this.handleInput} />
                <Input name="lastName" value={this.state.lastName} onChange={this.handleInput} />
                <Input name="email" value={this.state.email} onChange={this.handleInput} />
                <DatePicker onChange={this.handleDate} />
                <Button type="primary" onClick={this.handleSubmit}>
                    Submit
                </Button>
            </div>
        );
    }
}

export const App = connect(
    null,
    {
        createEventRequest,
    },
)(AppContainer);
