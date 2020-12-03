import {combineReducers} from "redux"
import modal from "./modal";
import login from "./login";
import alertShow from "./alertReduser";
import FilterState from "./filter";
//import users from "./users";
//import modal from "./modal";

const reducers = combineReducers({
       modal,login,alertShow,FilterState

    //users:users,
    //users:users,
})

export {reducers}