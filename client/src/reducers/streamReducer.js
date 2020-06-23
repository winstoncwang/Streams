import {
	CREATE_STREAM,
	FETCH_STREAMS,
	FETCH_STREAM,
	DELETE_STREAM,
	EDIT_STREAM
} from '../actions/types';
import _ from 'lodash';

export default (state = {}, action) => {
	switch (action.type) {
		case FETCH_STREAM:
			return { ...state, [action.payload.id]: action.payload };

		case CREATE_STREAM:
			return { ...state, [action.payload.id]: action.payload };

		case EDIT_STREAM:
			return { ...state, [action.payload.id]: action.payload };

		case FETCH_STREAMS:
			//use mapKeys: use the ID as the new KEY value and value of the whole stream object
			return { ...state, ..._.mapKeys(action.payload, 'id') };

		case DELETE_STREAM:
			//delete the payload which IS THE ID from the state, omit copies the object
			return _.omit(state, action.payload);

		default:
			return state;
	}
};
