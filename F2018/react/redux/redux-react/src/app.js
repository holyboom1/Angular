import React from "react";
import ReactDOM from "react-dom";
import Main from "./module/index";
import {createStore} from "redux";
import Reducer from "./reducers/index";
import {Provider} from "react-redux";
const store = createStore(Reducer);

//let data = new Redux(List,[])

ReactDOM.render(
    <Provider store={store}>
        <Main />
    </Provider>
    , document.getElementById("app"))




