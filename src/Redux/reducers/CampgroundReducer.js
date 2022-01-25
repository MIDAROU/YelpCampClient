import { GET_CAMPGROUND, GET_CAMPGROUNDS } from "../actionTypes/actionTypes";

const initialState = {
	campgrounds: [],
	campground: {},
};

const CampReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_CAMPGROUNDS:
			return { ...state, campgrounds: action.payload.Campgrounds };
		case GET_CAMPGROUND:
			return { ...state, campground: action.payload.campground };
		default:
			return state;
	}
};

//EXPORTS
export default CampReducer;
