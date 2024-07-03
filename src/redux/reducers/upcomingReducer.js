import { updateObject } from "./utils";

const initialState = {
    listUpcoming : [],
    messageErrorUpcoming : "Failed to get data"
};

export default function (state = initialState, action) {
    switch(action.type) {
        case "GET_UPCOMING_SUCCESS": 
            return updateObject(state, {
                listUpcoming : action.payload
            })
        case "GET_UPCOMING_FAILED": 
            return updateObject(state, {
                messageErrorUpcoming : "Failed to get data"
            })
        case "UPCOMING_PENDING": 
            return updateObject(state, {
                listPlaying: [],
                messageErrorUpcoming : ""
            })
        default:
            return state
    }
}