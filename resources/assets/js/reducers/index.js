import {
	combineReducers
}
from 'redux';
import {
	reducer as formReducer
}
from 'redux-form';
import wordReducer from './wordReducer';
import loginReducer from './loginReducer';

export default combineReducers({
	form: formReducer,
	word: wordReducer,
	login: loginReducer,
});