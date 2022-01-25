import { GET_COMMENTS } from "../actionTypes/actionTypes";

const initialState = {
	comments: [],
};

const CommentReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_COMMENTS:
			return { ...state, campgrounds: action.payload.campgrounds };
		default:
			return state;
	}
};

//EXPORTS
export default CommentReducer;
