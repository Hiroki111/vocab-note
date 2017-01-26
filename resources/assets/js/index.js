'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Note from './components/Note';
import Modal from './components/Modal';

ReactDOM.render(<Note />, document.getElementById('reactroot'));
ReactDOM.render(<Modal />, document.getElementById('new_word_modal'));
