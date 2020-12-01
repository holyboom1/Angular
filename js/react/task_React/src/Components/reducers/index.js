import {combineReducers} from "redux"
import modal from "./modal";
import login from "./login";
//import users from "./users";
//import modal from "./modal";

const reducers = combineReducers({
       modal,login

    //users:users,
    //users:users,
})

export {reducers}