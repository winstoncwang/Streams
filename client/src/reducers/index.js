import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import streamReducer from './streamReducers';

export default combineReducers({
	googleAuth : authReducer,
	form       : formReducer,
	streams    : streamReducer
});
