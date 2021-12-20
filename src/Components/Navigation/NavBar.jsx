import React from 'react';
import { Link } from 'react-router-dom';
const NavBar = ({setSearch}) => {
    return (
        <div>
            <Link to="/">Class redux app</Link>
            <input onChange={()=>setSearch((e)=>e.target.value)} type="text" name="" id="" />
            <button>search</button>
            <Link to="/cards">cart</Link>
        </div>
    );
};

export default NavBar;