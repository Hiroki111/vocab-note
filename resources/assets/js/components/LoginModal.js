import React from 'react';
import {
	Modal
}
from 'react-bootstrap';
import {
	connect
}
from 'react-redux';
import {
	Button
}
from 'react-bootstrap';
import LoginForm from './LoginForm';
import {
	SubmissionError
}
from 'redux-form';
import axios from 'axios';
import * as loginAction from '../actions/loginActions';

class LoginModal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false,
		};
		this.handleHideModal = this.handleHideModal.bind(this);
		this.handleShowModal = this.handleShowModal.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleShowModal() {
		this.setState({
			showModal: true
		});
	}
	handleHideModal() {
		this.setState({
			showModal: false
		});
	}

	handleSubmit(values) {
		return axios.post('/api/tokenAuth', {
			email: values.email,
			password: values.password
		}).then((response) => {
			this.props.dispatch(loginAction.setToken(response.data.token));
		}).catch((error) => {
			throw new SubmissionError({
				_error: 'Login failed - Wrong email address or password provided!'
			});
		});
	}

	render() {
		return (
			<div className="links">
				<a href="#" onClick={this.handleShowModal}>Log in</a>
				<Modal show={this.state.showModal} onHide={this.handleHideModal} bsSize="small" aria-labelledby="contained-modal-title-sm">
					<Modal.Header>
						<Modal.Title>Log in</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<LoginForm onSubmit={this.handleSubmit} onHide={this.handleHideModal}/>
					</Modal.Body>
				</Modal>
			</div>
		);
	}
}

export default connect()(LoginModal)