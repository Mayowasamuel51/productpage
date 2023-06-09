import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getProduct } from "../api/getProduct";
import axios from "axios";
import ProductList from "../List/ProductList";
import { Triangle, Rings } from "react-loader-spinner";

function Product() {

    const productQuery = useQuery({
        queryKey: ['posts'],
        queryFn: getProduct
    })
    if (productQuery.status === 'loading') {
        return <div style={{display:'flex',justifyContent:'center' , marginTop:'150px'}}>
          <Rings
  height="80"
  width="80"
  color="#4fa94d"
  radius="6"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  ariaLabel="rings-loading"
/>
        </div>
    }
    if (productQuery.status === 'error') {
        return <h1 className="text-danger ">{JSON.stringify(productQuery.error)}</h1>

    }


    return (
        <>
            <ProductList product={productQuery.data} />

        </>
    )
}


export default Product;