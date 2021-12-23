import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const NavBar = ({setSearch}) => {
    const select = useSelector((state)=>state.ProductReducer.cart)
    return (
        <div>
            <Link to="/">Class Redux</Link>
            <input onChange={(e)=>setSearch(e.target.value)} type="text" name="" id="" />
            <button>search</button>
            <Link to="/cart">Cart: {select.length} </Link>
        </div>
    );
};

export default NavBar;