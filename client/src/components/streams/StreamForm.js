import React from 'react';
//Field is a component, reduxForm is a function similar to connect() in react-redux
import { Field, reduxForm } from 'redux-form';

class StreamForm extends React.Component {
	renderError (meta) {
		if (meta.touched && meta.error) {
			return (
				<div className="ui error message">
					<div className="header">{meta.error}</div>
				</div>
			);
		}
	}

	renderInput = (formProps) => {
		console.log('formProps',formProps);
		const className = `field ${formProps.meta.touched &&
		formProps.meta.error
			? 'error'
			: ''}`;
		return (
			<div className={className}>
				<label>{formProps.label}</label>
				<input {...formProps.input} />
				{this.renderError(formProps.meta)}
			</div>
		);
	};

	onSubmit = (formValues) => {
		console.log(formValues);
		this.props.onSubmit(formValues);
	};

	render () {
		return (
			<form
				onSubmit={this.props.handleSubmit(this.onSubmit)}
				className="ui form error"
			>
				<Field
					name="title"
					component={this.renderInput}
					label="Enter Title"
				/>
				<Field
					name="description"
					component={this.renderInput}
					label="Enter Description"
				/>
				<button className="ui primary blue button">Submit</button>
			</form>
		);
	}
}

const validate = (formValues) => {
	const errors = {};
	if (!formValues.title) {
		errors.title = 'You must enter a title';
	}
	if (!formValues.description) {
		errors.description = 'You must enter a description';
	}
	return errors;
};

export default reduxForm({
	form     : 'streamForm',
	validate : validate
})(StreamForm);
