import React,{useState,useEffect} from 'react';
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux';
import ProdChild from './ProdChild';
import "./card.css"



const Products = ({search}) => {
    const stateProducts =useSelector((state)=>state.groupReducer.pro)
    // useEffect(()=>{
    //     // const filter = allProd.data.filter((item)=>item.title.toLowecase().include(search.toLowecase()))
    //     setProd(filter)
    // },[search])
    const dispatch =useDispatch()
    const [prod,setProd]=useState([])
    const getApiProduct =async ()=>{
        const allProd = await axios.get("https://fakestoreapi.com/products")
        setProd(allProd.data)
        // dispatch({type:"ADD-PRODUCT" , data: allProd.data})
    }
    useEffect(()=>{

        getApiProduct()
    },[])
    return (
        <div>
            <h1>Product perent</h1>
        <div className='some' >
            {prod.map((elem)=><ProdChild item={elem}/>)}
        </div>
        </div>
    );
};

export default Products;