import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';
import wordReducer from './wordReducer';

export default combineReducers({
	form:formReducer,
	word:wordReducer,
});