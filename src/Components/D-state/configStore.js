import {createStore,combineReducers} from 'redux'
import {ProductReducer} from "../C-Reducer/productReducer"

export const configStore= ()=>{
    const  myStore = createStore(combineReducers({ProductReducer}),
    window.__REDUX_DEVTOOLS_EXTENTION__ && window.__REDUX_DEVTOOLS_EXTENTION__()
    )
    return myStore
}
