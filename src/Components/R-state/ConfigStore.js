import React from 'react';
import {createStore, combineReducers} from "redux"
import {groupReducer} from "../Redux-Reducer/groupReducer"


export const ConfigStore = () => {
    const mystore = createStore(combineReducers({groupReducer}),
    window.__REDUX_DEVTOOLS_EXTENTION__ && window.__REDUX_DEVTOOLS_EXTENTION__()
    )
    return mystore
};
