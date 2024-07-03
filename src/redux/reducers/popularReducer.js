import { updateObject } from "./utils";

const initialState = {
    listPopular : [],
    messageErrorPopular : "Failed to get data"
};

export default function (state = initialState, action) {
    switch(action.type) {
        case "GET_POPULAR_SUCCESS": 
            return updateObject(state, {
                listPopular : action.payload
            })
        case "GET_POPULAR_FAILED": 
            return updateObject(state, {
                messageErrorPopular : "Failed to get data"
            })
        case "POPULAR_PENDING": 
            return updateObject(state, {
                listPlaying: [],
                messageErrorPopular : ""
            })
        default:
            return state
    }
}