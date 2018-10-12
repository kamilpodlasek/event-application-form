import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, DatePicker, Input, Form, Row, Col } from 'antd';
import { withFormik } from 'formik';

import { eventValidationSchema } from 'common';
import { createEventRequest } from './event/actions/eventActions';
import 'antd/dist/antd.css';

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    date: null,
};

const textFieldsConfig = [
    { label: 'First Name', name: 'firstName' },
    { label: 'Last Name', name: 'lastName' },
    { label: 'E-mail', name: 'email' },
];

function getValidateStatuses({ touched, errors }) {
    return Object.entries(touched).reduce((acc, [fieldName, fieldTouched]) => {
        if (!fieldTouched) {
            return acc;
        }

        if (errors[fieldName]) {
            return { ...acc, [fieldName]: 'error' };
        }

        return { ...acc, [fieldName]: 'success' };
    }, {});
}

class AppContainer extends Component {
    handleDateChange = dateMoment => {
        const event = { target: { name: 'date', value: dateMoment } };
        this.props.handleChange(event);
    };

    handleDatePickerTrigger = opened => !opened && this.props.handleBlur({ target: { name: 'date' } });

    render() {
        const { values, touched, errors, handleChange, handleBlur, handleSubmit } = this.props;
        const validateStatuses = getValidateStatuses(this.props);

        return (
            <div className="container">
                <Row>
                    <Col span={6} offset={9}>
                        <Form onSubmit={handleSubmit}>
                            {textFieldsConfig.map(({ label, name }) => (
                                <Form.Item
                                    key={name}
                                    label={label}
                                    validateStatus={validateStatuses[name]}
                                    help={touched[name] && errors[name]}
                                    hasFeedback={!!touched[name]}
                                >
                                    <Input
                                        name={name}
                                        value={values[name]}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </Form.Item>
                            ))}

                            <Form.Item
                                label="Date"
                                validateStatus={validateStatuses.date}
                                help={!values.date && touched.date && errors.date}
                                hasFeedback={!!touched.date}
                            >
                                <DatePicker
                                    name="date"
                                    value={values.date}
                                    onChange={this.handleDateChange}
                                    onOpenChange={this.handleDatePickerTrigger}
                                    style={{ width: '100%' }}
                                />
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit" block>
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
            </div>
        );
    }
}

export const App = connect(
    null,
    {
        createEventRequest,
    },
)(
    withFormik({
        validationSchema: eventValidationSchema,
        mapPropsToValues: () => initialState,
        handleSubmit: ({ date, ...values }, { props }) =>
            props.createEventRequest({ ...values, date: date.toString() }),
    })(AppContainer),
);
