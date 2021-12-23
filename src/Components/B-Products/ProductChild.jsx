import React from 'react';
import "./Redux.css"
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux';
const ProductChild = ({item}) => {
    const dispatch = useDispatch()
    return (
        <div className='child-card'>
            <img className='image'  src={item.image} alt="" />
            <h2>{item.title.substr(0, 20 )+ "..."}</h2>
            <h3>Proce: ${item.price}</h3>
            <button onClick={()=>dispatch({type:"ADD_CART", data:item})}>ADD TO CART</button>
            <Link to="/details"> <button onClick={()=>dispatch({type:"SELECTED_PRODUCT",data: item})}>VIEW DETAIL</button> </Link>
        </div>
    );
};

export default ProductChild;