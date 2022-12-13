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

const postOrderProduct = (products) => {
    console.log(products)
    const token = '5814006447:AAFJuB0xldtvBja_hKTXpnL6VwGlH9-23lg'
    const chat_id = '2139619771'
    const api_url = `https://api.telegram.org/bot${token}/sendMessage`
    return axios.post(api_url, {
        parse_mode: 'HTML',
        text: `<b>Новый Заказ</b>\n\nФИО: 
        ${products.name}\n\товар: 
        ${products.address}\n\телефон номер заказчика: 
        ${products.phone}\n\n название товары ${products.title}`,
        chat_id
    })
}

export const services = {
    getCategories,
    allProduct,
    getCategoryProduct,
    postOrderProduct
}