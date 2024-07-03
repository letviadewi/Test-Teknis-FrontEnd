import { combineReducers } from "redux";
import now_playingReducer from "./nowPlayingReducer";
import topRatedReducers from "./topRatedReducers";
import popularReducer from "./popularReducer";
import upcomingReducer from "./upcomingReducer";

export const rootReducer = combineReducers({
    now_playing : now_playingReducer,
    upcoming : upcomingReducer,
    popular: popularReducer,
    topRated: topRatedReducers

})