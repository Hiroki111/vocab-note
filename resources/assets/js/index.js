'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Note from './components/Note';
import Modal from './components/Modal';
import {Provider} from 'react-redux';
import store from './store';

ReactDOM.render(<Provider store={store}>
	<Note />
	</Provider>, document.getElementById('reactroot'));
ReactDOM.render(<Provider store={store}>
	<Modal />
	</Provider>, document.getElementById('new_word_modal'));
