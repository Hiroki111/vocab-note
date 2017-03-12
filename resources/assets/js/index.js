'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Note from './components/Note';
import Modal from './components/Modal';
import {Provider} from 'react-redux';
import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

const reducers = {
  form: formReducer   
};
const reducer = combineReducers(reducers);
const store = createStore(reducer);

ReactDOM.render(<Note />, document.getElementById('reactroot'));
ReactDOM.render(<Provider store={store}>
	<Modal />
	</Provider>, document.getElementById('new_word_modal'));
