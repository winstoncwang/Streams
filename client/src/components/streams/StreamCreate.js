import React from 'react';
//Field is a component, reduxForm is a function similar to connect() in react-redux
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createStream } from '../../actions';

class StreamCreate extends React.Component {
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
		this.props.createStream(formValues);
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

const formWrapper = reduxForm({
	form     : 'streamCreate',
	validate : validate
})(StreamCreate);

export default connect(null, { createStream })(formWrapper);
