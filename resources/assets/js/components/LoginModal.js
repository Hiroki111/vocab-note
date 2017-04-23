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

class LoginModal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false,
		};
		this.handleHideModal = this.handleHideModal.bind(this);
		this.handleShowModal = this.handleShowModal.bind(this);
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

	render() {
		return (
			<div className={this.props.classes}>
				<a href="#" onClick={this.handleShowModal}>Log in</a>
				<Modal show={this.state.showModal} onHide={this.handleHideModal} bsSize="small" aria-labelledby="contained-modal-title-sm">
					<Modal.Header>
						<Modal.Title>Log in</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<div>
							<label>E-Mail Address</label>
							<div><input id="email" type="email" /></div>
                    	</div>
                    	<div>
                    		<label>Password</label>
                    		<div><input id="password" type="password" /></div>
                    	</div>
                    	<div>
                    		<label><input type="checkbox" name="remember"/> Remember me</label>
                    	</div>
                    	<div>
                    		<button type="submit">Login</button>
                        	<a href="{{ url('/password/reset') }}">Forgot Your Password?</a>
                    	</div>
					</Modal.Body>
					<Modal.Footer>
						<Button onClick={this.handleHideModal}>Close</Button>
					</Modal.Footer>
				</Modal>
			</div>
		);
	}
}

export default connect()(LoginModal)