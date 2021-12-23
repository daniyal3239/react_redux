import React,{useState} from 'react';
import {Routes,BrowserRouter,Route} from 'react-router-dom'
import NavBar from '../A-Navigation/NavBar';
import ProducPerent from '../B-Products/ProducPerent';
import ProductCart from '../B-Products/ProductCart';
import ProductDetails from '../B-Products/ProductDetails';


const Landing = () => {
    const [search, setSearch ] = useState("")

    return (
        <BrowserRouter>
        <NavBar setSearch={setSearch} />
        <Routes>
        <Route path="/" element={<ProducPerent search={search}/>}/>
        <Route path="/cart" element={<ProductCart/>}/>
        <Route path="/details" element={<ProductDetails/>}/>
        
        
        </Routes>
        </BrowserRouter>
    );
};

export default Landing;