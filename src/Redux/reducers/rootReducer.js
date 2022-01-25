//IMPORT
import { combineReducers } from "redux";
import CampReducer from "./CampgroundReducer";
import CommentReducer from "./CommentsReducer";
import UserReducer from "./UserReducer";

//COMBINED REDUCER
const rootReducer = combineReducers({
	UserReducer,
	CampReducer,
	CommentReducer,
});

//EXPORTS
export default rootReducer;
