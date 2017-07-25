import {
	combineReducers
}
from 'redux';
import {
	reducer as formReducer
}
from 'redux-form';
import coverReducer from './coverReducer';
import wordReducer from './wordReducer';
import loginReducer from './loginReducer';

export default combineReducers({
	cover: coverReducer,
	form: formReducer,
	word: wordReducer,
	login: loginReducer,
});