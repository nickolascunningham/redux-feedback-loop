import { combineReducers } from "redux";
import feedbackReducer from "./feedbackReducer";


export default combineReducers ({
    feedback: feedbackReducer
})