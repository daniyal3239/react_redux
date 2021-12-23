import React, {useState,useEffect} from 'react';
import axios from 'axios'
import { useDispatch,useSelector } from 'react-redux';
import ProductChild from "./ProductChild"
import "./Redux.css"


const ProducPerent = ({search}) => {
    const select = useSelector((state)=>state.ProductReducer.product)

    const[products,setProducts] = useState([])
    const dispatch = useDispatch()
    const getApiData =async ()=>{
        const result = await axios.get("https://fakestoreapi.com/products")
        setProducts(result.data)
        select.length <=0 && dispatch({type:"ADD_PRODUCT", data:result.data})
        console.log(result.data,"------");
    }
    useEffect(()=>{
        getApiData()
    },[])

    useEffect(()=>{
        const filter = select.filter((elem)=>elem.title.toUpperCase().includes((search.toUpperCase())))
        setProducts(filter)
    },[search])
    return (
        <div>
            <h1>product perent</h1>
            <div className='cards'>
                {products.map((elem)=><ProductChild item={elem}/>)}
            </div>
        </div>
    );
};

export default ProducPerent;