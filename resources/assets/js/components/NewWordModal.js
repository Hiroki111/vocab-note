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

@connect((store) => {
	return {
		token: store.login.token,
	}
})
class NewWordModal extends React.Component {
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
		this.props.dispatch(wordAction.setWord({
			word: "",
			pronunciation: "",
			type: "",
			meaning: "",
			example: "",
		}));
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
		fetch('/api/restricted/words/', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Authorization': 'Bearer {' + this.props.token + '}',
			},
			body: JSON.stringify({
				word: values.word,
				pronunciation: values.pronunciation,
				type: values.type,
				meaning: values.meaning,
				example: values.example,
			}),
		}).then((response) => {
			response.json().then((jsonReponse) => {
				this.props.dispatch(wordAction.addWord(jsonReponse));
			});
			this.handleHideModal();
		});
	}

	render() {
		return (
			<div className="links">
				<a href="#" onClick={this.handleShowModal}>Register New Word</a>
				<Modal show={this.state.showModal} onHide={this.handleHideModal}>
					<Modal.Header>
						<Modal.Title>New Word</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<WordForm onSubmit={this.handleSubmit} onHide={this.handleHideModal}/>
					</Modal.Body>
				</Modal>
			</div>
		);
	}
}

export default connect()(NewWordModal)