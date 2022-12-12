import axios from 'axios';

axios.defaults.baseURL = "https://dummyjson.com/products"

const allProduct = () => {
    return axios.get('https://dummyjson.com/products')
}

//? Данные Категория
const getCategories = () => {
    return axios.get("/categories")
}

const getCategoryProduct = (product) => {
    return axios.get(`/category/${product}`)
}

export const services = {
    getCategories,
    allProduct,
    getCategoryProduct
}