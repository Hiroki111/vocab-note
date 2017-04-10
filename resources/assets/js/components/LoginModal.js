import React from 'react';
import {
	Modal
}
from 'react-bootstrap';
import {
	connect
}
from 'react-redux';
import * as wordAction from '../actions/wordActions';
import WordForm from './WordForm';

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

	}

	render() {
		return (
			<div id="register" className="links">
				<a href="#" onClick={this.handleShowModal}>Log in</a>
				<Modal show={this.state.showModal} onHide={this.handleHideModal}>
					<Modal.Header>
						<Modal.Title>Log in</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<WordForm onSubmit={this.handleSubmit} onHide={this.handleHideModal}/>
					</Modal.Body>
				</Modal>
			</div>
		);
	}
}

export default connect()(LoginModal)