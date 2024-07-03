import { updateObject } from "./utils";

const initialState = {
    listTopRated : [],
    messageErrorTopRated : "Failed to get data"
};

export default function (state = initialState, action) {
    switch(action.type) {
        case "GET_TOP_RATED_SUCCESS": 
            return updateObject(state, {
                listTopRated : action.payload
            })
        case "GET_TOP_RATED_FAILED": 
            return updateObject(state, {
                messageErrorTopRated : "Failed to get data"
            })
        case "TOP_RATED_PENDING": 
            return updateObject(state, {
                listTopRated: [],
                messageErrorTopRated : ""
            })
        default:
            return state
    }
}