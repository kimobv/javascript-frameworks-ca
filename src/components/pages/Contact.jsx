import React, { useState } from 'react';
import Heading from '../static/Heading';
import Select from 'react-select';
import * as yup from 'yup';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Container, FloatingLabel, Alert, Form } from 'react-bootstrap';
import { DEFAULT_VALUES, SUBJECT_VALUES } from '../../constants/register';

const yupForm = yup.object().shape({
	firstName: yup.string().required('Enter your first name!').min(2, 'First name must be at least 2 characters!'),
	lastName: yup.string().required('Enter your last name!').min(3, 'Last name must be at least 3 characters!'),
	email: yup.string().required('Enter an email address!').email('Enter a valid email address!'),
	subject: yup.mixed().required('Choose a subject!'),
	message: yup.string().required('You forgot to write a message!').min(12, 'Your message must be 12 characters or longer!'),
});

function Contact() {
	const [submitted, setSubmitted] = useState(false);
	const {
		register,
		handleSubmit,
		control,
		reset,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(yupForm),
	});
	function onSubmit(data) {
		setSubmitted(true);
		reset(DEFAULT_VALUES);
	}
	//console.log(errors);

	return (
		<Container className="wrapper">
			<Heading title="Tell us what you think." />
			{submitted && <Alert variant="success">Thank you for contacting us!</Alert>}
			<form onSubmit={handleSubmit(onSubmit)}>
				<FloatingLabel controlId="floatingInput" label="Fist Name" className="mb-3">
					<Form.Control placeholder="First name" {...register('firstName')} />
					{errors.firstName && <span>{errors.firstName.message}</span>}
				</FloatingLabel>
				<FloatingLabel controlId="floatingInput" label="Last Name" className="mb-3">
					<Form.Control placeholder="Last name" {...register('lastName')} />
					{errors.lastName && <span>{errors.lastName.message}</span>}
				</FloatingLabel>
				<FloatingLabel controlId="floatingInput" label="Email" className="mb-3">
					<Form.Control placeholder="Email" {...register('email')} />
					{errors.email && <span>{errors.email.message}</span>}
				</FloatingLabel>
				<FloatingLabel controlId="floatingInput" className="mb-3">
					<Controller name="subject" control={control} render={({ field }) => <Select isMulti options={SUBJECT_VALUES} {...field} placeholder="Subject" />} />
					{errors.subject && <span>{errors.subject.message}</span>}
				</FloatingLabel>
				<FloatingLabel controlId="floatingTextarea" label="Message" className="mb-6">
					<Form.Control as="textarea" {...register('message')} style={{ height: '200px' }} placeholder="Message" />
					{errors.message && <span>{errors.message.message}</span>}
				</FloatingLabel>
				<button type="submit" className="btn btn-primary">
					Send
				</button>
			</form>
		</Container>
	);
}
export default Contact;
