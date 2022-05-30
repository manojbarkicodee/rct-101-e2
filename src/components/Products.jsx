import React,{useState,useEffect} from "react";
import AddProduct from "./AddProduct"
import Product from "./Product"
import Pagination from "./Pagination"
import { Flex,Grid } from '@chakra-ui/react'
import axios from "axios"
import styles from "./style.module.css"
const Products = () => {
  let [products,setproducts]=useState([])
  // TODO: Remove below const and instead import them from chakra
  // const Flex = () => <div />;
  // const Grid = () => <div />;
  let [page,setpage]=useState(1)
  let [limit,setlimit]=useState(3)

  useEffect(() => {
    let get=async()=>{
      let data=await axios.get(`http://localhost:8080/products?_page=${page}&_limit=${limit}`)
      console.log(data.data)
      setproducts(data.data)
        }
  get()
   
  }, [])
  
  console.log(products)

  return (
    <div >
      {/*  AddProduct */}
      <AddProduct/>
      <Grid className={styles.grid}>{/* List of Products */}
     {products.map((el,index)=>{
   return <Product key={el.id} el={el} />
})}
      
      </Grid>
      {/* Pagination */}
      <Pagination/>
     </div>
  );
};

export default Products;
