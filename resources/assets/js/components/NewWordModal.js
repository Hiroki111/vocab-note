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
		fetch('/api/words/', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
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
			<div className={this.props.classes}>
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