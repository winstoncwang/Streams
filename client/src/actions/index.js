import streams from '../api/streams';
import {
	SIGN_IN,
	SIGN_OUT,
	CREATE_STREAM,
	FETCH_STREAMS,
	FETCH_STREAM,
	DELETE_STREAM,
	EDIT_STREAM
} from './types';
import history from '../history';

export const createStream = (formValues) => {
	return async (dispatch, getState) => {
		const { userId } = getState().googleAuth;
		const response = await streams.post('/streams', {
			...formValues,
			userId
		});
		dispatch({ type: CREATE_STREAM, payload: response.data });
		//programmatic navigation
		history.push('/');
	};
};
//get a list of streamss
export const fetchStreams = () => {
	return async (dispatch) => {
		const response = await streams.get('/streams');

		dispatch({ type: FETCH_STREAMS, payload: response.data });
	};
};

export const editStream = (id, formValues) => {
	return async (dispatch) => {
		const response = await streams.patch(`/streams/${id}`, formValues);

		dispatch({ type: EDIT_STREAM, payload: response.data });
		history.push('/');
	};
};

export const fetchStream = (id) => {
	return async (dispatch) => {
		const response = await streams.get(`/streams/${id}`);

		dispatch({ type: FETCH_STREAM, payload: response.data });
	};
};

export const deleteStream = (id) => {
	return async (dispatch) => {
		const response = await streams.delete(`/streams/${id}`);

		dispatch({ type: DELETE_STREAM, payload: id });
		//_omit deletes the current state stream using id type, if using reponse.data, {] is passed rather, this prevents any deletion, hence the state is not changed.
		//going back to '/' rerenders the exact same list. But reloading the page sends a get request to the api-server, the REST delete method is still invoked,
		// hence newly fetched list removed the deleted stream.
		history.push('/');
	};
};

export const signIn = (userId) => {
	return { type: SIGN_IN, payload: userId };
};

export const signOut = () => {
	return { type: SIGN_OUT };
};
