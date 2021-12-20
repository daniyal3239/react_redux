import React from 'react';
import "./card.css"


const ProdChild = ( {item}) => {
    return (
        <div className='car'>
           <img className='img' src={item.image}  width="200px" height="200px" alt="" />
           <h3> {item.title.substr(0,20)+"..."} </h3>
           <h3>Price: $ {item.price} </h3>
           <button style={{marginBottom:"30px"}} >Add to cart</button>
           <button style={{marginBottom:"30px"}}>Viwe details</button>

        </div>
    );
};

export default ProdChild;