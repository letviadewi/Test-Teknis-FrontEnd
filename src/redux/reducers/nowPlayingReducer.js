import { updateObject } from "./utils";

const initialState = {
    listPlaying : [],
    messageErrorNowPlaying : "Failed to get data"
};

export default function(state = initialState, action) {
    switch (action.type) {
        case "GET_PLAYING_SUCCESS":
            console.log("Payload dari GET_PLAYING_SUCCESS:", action);
            return updateObject(state, {
                listPlaying: action.payload
            });
        case "GET_PLAYING_FAILED":
            console.log("Payload dari GET_PLAYING_FAILED:", action.payload);
            return updateObject(state, {
                messageErrorNowPlaying: "Failed to get data"
            });
        case "PLAYING_PENDING":
            console.log("Handling PLAYING_PENDING...");
            return updateObject(state, {
                listPlaying: [],
                messageErrorNowPlaying: ""
            });
        default:
            return state;
    }
}
