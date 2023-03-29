import axios from "axios";


export function getProduct() {
    const baseUrl = 'https://fakestoreapi.com/products'

   return axios.get(baseUrl).then(res=>res.data)
}



