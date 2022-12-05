import axios from 'axios';

export const API = axios.create({
  baseURL: ' https://dummyjson.com'
});

// export const fetchDataProducts = async() => {
//     console.log("Fetch data products");
//     const response  = await axios.get(`/${bestURI}/products`);
//     const products = response.data;

//     console.log(products);

//     return products;
// }
