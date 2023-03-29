import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getProduct } from "../api/getProduct";
import axios from "axios";
import ProductList from "../List/ProductList";
import { Triangle } from "react-loader-spinner";

function Product() {

    const productQuery = useQuery({
        queryKey: ['posts'],
        queryFn: getProduct
    })
    if (productQuery.status === 'loading') {
        return <div style={{display:'flex',justifyContent:'center' , marginTop:'150px'}}>
            <Triangle
                height="300"
                width="200"
                color="#4fa94d"
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
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