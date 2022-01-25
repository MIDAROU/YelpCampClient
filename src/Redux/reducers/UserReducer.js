import {
	CLEAR_ERRORS,
	CLEAR_SUCCESS,
	FAIL,
	GET_CURRENT,
	LOGIN,
	LOGOUT,
	REGISTER,
	SUCCESS,
	UPDATE,
	UPDATE_PASSWORD,
	UPLOAD_USER_IMG,
} from "../actionTypes/actionTypes";

const initialState = {
	User: {},
	LoggedIn: false,
	Success: null,
	Errors: null,
};

const UserReducer = (state = initialState, action) => {
	switch (action.type) {
		case REGISTER:
			localStorage.setItem("Token", action.payload.Token);
			return {
				...state,
				User: action.payload.newUser,
				LoggedIn: true,
				Errors: null,
			};
		case LOGIN:
			localStorage.setItem("Token", action.payload.Token);
			return {
				...state,
				User: action.payload.found,
				LoggedIn: true,
				Errors: null,
			};
		case LOGOUT:
			localStorage.removeItem("Token");
			return { ...state, User: null, LoggedIn: false, Errors: null };
		case UPDATE:
			localStorage.setItem("Token", action.payload.Token);
			return { ...state, User: action.payload.UpdatedUser, Errors: null };
		case UPDATE_PASSWORD:
			return { ...state, User: action.payload.UpdatedUser, Errors: null };
		case UPLOAD_USER_IMG:
			return { ...state, User: action.payload.UpdatedUser, Errors: null };
		case GET_CURRENT:
			return {
				...state,
				User: action.payload,
				LoggedIn: true,
				Errors: null,
			};
		case SUCCESS:
			return {
				...state,
				Errors: null,
				Success: action.payload.success,
			};
		case CLEAR_SUCCESS:
			return { ...state, Success: null };
		case FAIL:
			return { ...state, Success: null, Errors: action.payload.errors };
		case CLEAR_ERRORS:
			return {
				...state,
				Errors: null,
			};
		default:
			return state;
	}
};

export default UserReducer;
