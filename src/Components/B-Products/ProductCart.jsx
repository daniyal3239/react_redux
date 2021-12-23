import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
const ProductCart = () => {
    const dispatch = useDispatch()
    const select = useSelector((state)=>state.ProductReducer.cart)

    return (
    <div className= 'cards'>
        {select.map((item)=>{
            return(
                <div className='child-card'>
                    <img className='image'  src={item.image} alt="" />
                    <h2>{item.title.substr(0, 20 )+ "..."}</h2>
                    <h3>Proce: ${item.price}</h3>
                    <button onClick={()=>dispatch({type:"REMOVE_PRODUCT", data:item})}>REMOVE</button>
                    <Link to="/details"> <button onClick={()=>dispatch({type:"SELECTED_PRODUCT",data: item})}>VIEW DETAIL</button> </Link>

                </div>
            )
        })}
    </div>
    );
};

export default ProductCart;