import React from 'react';
import { useSelector,useDispatch } from 'react-redux';

const ProductDetails = () => {
    const dispatch = useDispatch()
    const select = useSelector((state)=>state.ProductReducer.selectedProduct[0])
    return (
        <div>
            <h1>product details</h1>
            <img className='image'  src={select.image} alt="" />
            <h2>{select.title}</h2>
            <h3>Proce: ${select.price}</h3>
            <button onClick={()=>dispatch({type:"ADD_CART", data:select})}>ADD TO CART</button>

        </div>
    );
};

export default ProductDetails;
