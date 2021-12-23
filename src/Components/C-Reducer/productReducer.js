export const ProductReducer = (state={product:[],cart:[],selectedProduct:[]},action)=>{
    if(action.type==="ADD_PRODUCT"){
        return {...state, product:[...action.data, ...state.product]}
    }
    if(action.type==="SELECTED_PRODUCT"){
        return {...state, selectedProduct:[action.data]}
    }
    if(action.type==="ADD_CART"){
        return {...state, cart:[{...action.data, key: state.cart.length}, ...state.cart]}
    }
    if(action.type==="REMOVE_PRODUCT"){
        const filtered = state.cart.filter((elem)=> elem.key !== action.data.key)
        return{...state, cart: filtered}
    }
    return state
}