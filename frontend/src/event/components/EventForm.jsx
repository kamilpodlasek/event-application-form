import React, { Component } from 'react';
import { Button, DatePicker, Input, Form, Row, Col } from 'antd';
import { withFormik } from 'formik';

import { eventValidationSchema } from 'common';
import { getValidateStatuses } from '../helpers/getValidateStatuses';

const textFieldsConfig = [
    { label: 'First Name', name: 'firstName' },
    { label: 'Last Name', name: 'lastName' },
    { label: 'E-mail', name: 'email' },
];

class EventFormComponent extends Component {
    handleDateChange = dateMoment => this.props.setFieldValue('date', dateMoment);

    handleDatePickerTrigger = opened => !opened && this.props.setFieldTouched('date');

    render() {
        const { values, touched, errors, handleChange, handleBlur, handleSubmit } = this.props;
        const validateStatuses = getValidateStatuses(this.props);

        return (
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
        );
    }
}

export const EventForm = withFormik({
    validationSchema: eventValidationSchema,
    mapPropsToValues: props => props.values,
    handleSubmit: ({ date, ...values }, { props }) =>
        props.submitForm({ ...values, date: date.toString() }),
})(EventFormComponent);
