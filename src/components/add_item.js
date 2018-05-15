import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { reduxForm, Field, formValues } from 'redux-form';
import { connect } from 'react-redux';
import { addToDoItem } from '../actions';

class AddItem extends Component {
    async handleAddItem(values) {
        await this.props.addToDoItem(values);
        console.log('Add Item Props; ', this.props);
        this.props.history.push('/');
    }

    renderInput({ label, input, meta: { touched }, meta: { error } }) {
        return (
            <div>
                <label>{label}</label>
                <input {...input} type="text" />
                <p className="red-text text-darken-2">
                    {touched && error}
                </p>
            </div>
        );
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <div>
                <h1 className="center">Add ToDo Item</h1>
                <div className="row right-align">
                    <Link className="btn blue" to="/">View List</Link>
                </div>
                <div className="row">
                    <form onSubmit={handleSubmit(this.handleAddItem.bind(this))} className="col s12 m8 offset-m2">
                        <Field name="title" label="Item Title" component={this.renderInput} />
                        <Field name="details" label="Item Details" component={this.renderInput} />
                        <button className="btn">Add Item</button>
                    </form>
                </div>
            </div>
        )
    }
}

function validateForm(values) {
    const { title, details } = values;

    const errors = {};

    if (!title) {
        errors.title = 'please enter a title';
    }
    if (!details) {
        errors.details = 'please enter some details about your task';
    }

    return errors;
}

AddItem = reduxForm({
    form: 'add_item_form',
    validate: validateForm
})(AddItem);

export default connect(null, { addToDoItem })(AddItem);