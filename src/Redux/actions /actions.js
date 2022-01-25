//IMPORTS
import axios from "axios";
import {
	CLEAR_ERRORS,
	CLEAR_SUCCESS,
	FAIL,
	GET_CAMPGROUNDS,
	GET_CURRENT,
	LOGIN,
	LOGOUT,
	REGISTER,
	SUCCESS,
	UPDATE,
	UPDATE_PASSWORD,
	UPLOAD_USER_IMG,
} from "../actionTypes/actionTypes";

//CAMPGROUND
export const getcampgrounds = () => async (dispatch) => {
	try {
		//GET CAMPGROUNDS
		const res = await axios.get("/campgrounds/list");
		//DISPATCH THE ACTION
		dispatch({ type: GET_CAMPGROUNDS, payload: res.data });
	} catch (error) {}
};

//USERS
export const register = (newUser, navigate) => async (dispatch) => {
	try {
		//POST NEW USER
		const res = await axios.post("/users/signUp", newUser);
		//DISPATCH THE ACTION
		dispatch({ type: REGISTER, payload: res.data });
		dispatch({ type: SUCCESS, payload: res.data });
		dispatch(getCurrent());
		navigate("/");
	} catch (error) {
		if (error.response) {
			dispatch({ type: FAIL, payload: error.response.data });
		} else
			dispatch({
				type: FAIL,
				payload: { errors: [{ msg: "SERVER ERROR , TRY AGAIN SOON!!" }] },
			});
	}
};

export const login = (User, navigate) => async (dispatch) => {
	try {
		//POST USER
		const res = await axios.post("/users/signIn", User);
		//DISPATCH THE ACTION
		dispatch({ type: LOGIN, payload: res.data });
		dispatch({ type: SUCCESS, payload: res.data });
		dispatch(getCurrent());
		navigate("/");
	} catch (error) {
		if (error.response) {
			dispatch({ type: FAIL, payload: error.response.data });
		} else
			dispatch({
				type: FAIL,
				payload: { errors: [{ msg: "SERVER ERROR , TRY AGAIN SOON!!" }] },
			});
	}
};

export const logout = () => async (dispatch) => {
	dispatch({ type: LOGOUT });
};

export const getCurrent = () => async (dispatch) => {
	const Token = localStorage.getItem("Token");

	const config = {
		headers: {
			Authorized: Token,
		},
	};
	try {
		//POST USER
		const res = await axios.get("/users/current", config);
		//DISPATCH THE ACTION
		dispatch({ type: GET_CURRENT, payload: res.data });
	} catch (error) {
		if (error.response) {
			dispatch({ type: FAIL, payload: error.response.data });
		} else
			dispatch({
				type: FAIL,
				payload: { errors: [{ msg: "SERVER ERROR , TRY AGAIN SOON!!" }] },
			});
	}
};

export const update = (User) => async (dispatch) => {
	const Token = localStorage.getItem("Token");

	const config = {
		headers: {
			Authorized: Token,
		},
	};
	try {
		//PUT USER
		const res = await axios.put("/users/update", User, config);
		dispatch({ type: UPDATE, payload: res.data });
		dispatch({ type: SUCCESS, payload: res.data });
		dispatch(getCurrent());
	} catch (error) {
		if (error.response) {
			dispatch({ type: FAIL, payload: error.response.data });
		} else
			dispatch({
				type: FAIL,
				payload: { errors: [{ msg: "SERVER ERROR , TRY AGAIN SOON!!" }] },
			});
	}
};

export const updatePassword = (User) => async (dispatch) => {
	const Token = localStorage.getItem("Token");

	const config = {
		headers: {
			Authorized: Token,
		},
	};
	try {
		// PUT USER PASSWORD
		const res = await axios.put("/users/updatePassword", User, config);
		dispatch({ type: UPDATE_PASSWORD, payload: res.data });
		dispatch({ type: SUCCESS, payload: res.data });
		dispatch(getCurrent());
	} catch (error) {
		if (error.response) {
			dispatch({ type: FAIL, payload: error.response.data });
		} else
			dispatch({
				type: FAIL,
				payload: { errors: [{ msg: "SERVER ERROR , TRY AGAIN SOON!!" }] },
			});
	}
};

export const uploadUserImg = (Data) => async (dispatch) => {
	const Token = localStorage.getItem("Token");

	const config = {
		headers: {
			Authorized: Token,
		},
	};
	try {
		//PUT USER PASSWORD
		const res = await axios.post("/users/upload", Data, config);

		dispatch({ type: UPLOAD_USER_IMG, payload: res.data });
		dispatch({ type: SUCCESS, payload: res.data });
		dispatch(getCurrent());
	} catch (error) {
		if (error.response) {
			dispatch({ type: FAIL, payload: error.response.data });
		} else
			dispatch({
				type: FAIL,
				payload: { errors: [{ msg: "SERVER ERROR , TRY AGAIN SOON!!" }] },
			});
	}
};

export const clearSuccess = () => async (dispatch) => {
	dispatch({ type: CLEAR_SUCCESS });
};

export const clearErrors = () => async (dispatch) => {
	dispatch({ type: CLEAR_ERRORS });
};
