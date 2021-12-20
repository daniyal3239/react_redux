import React,{useState} from 'react';
import NavBar from './Navigation/NavBar';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Products from './Products/Products';
import Cards from './Products/Cards';
import ProdDetails from './Products/ProdDetails';



const Landing = () => {
    const [search,setSearch]=useState("")

    return (
        <BrowserRouter>
        <NavBar setSearch={setSearch}/>
        <Routes>
            <Route path="/" element={<Products search={search}/>}/>
            <Route path="/cards" element={<Cards/>}/>
            <Route path="/details" element={<ProdDetails/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Landing;