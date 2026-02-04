import axios from "axios";
import {useEffect, useState} from 'react'

import { Product } from "./Product";

export function ProductsGrid({loadCart}){
 const [products,setProducts]=useState([]);
  //const [quantity,setQuantity]=useState([1]);
   useEffect(()=>{
    const getHomePageData=async()=>{
      const response= await axios.get('http://localhost:3000/api/products');
      setProducts(response.data);
    }

    getHomePageData();
     

   },[]);


return (
 <div className="products-grid">
        {products.map(
          (product)=>{
            return(
              <Product product={product} loadCart={loadCart} key={product.id}/>
            
            );
          } 
        )}
  
      </div>
);

}