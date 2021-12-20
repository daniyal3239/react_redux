

export const groupReducer =(state={product:[],cart:[],selectedProd:[]},action)=>{
        if (action.type === "ADD-PRODUCT"){
        return {...state, product:[...action.data, ...state.product]}
    }
    if (action.type === "SELECTED-PRODUCT"){
        return {...state, selectedProd: [action.data,]}
    }
    if (action.type === "REMOVE-PRODUCT"){
        const filtProducts = state.cart.filter((item)=>item !== action.data)
        return {...state, cart: filtProducts}
    }
    if (action.type === "ADD-CART"){
        return {...state, cart:[...state.cart, ...action.data]}
    }
    return state
}