import { useReducer } from "react";
import { MyContext } from "./My-context";
import { ProductReducer } from "./Product-reducer";
import { GET_CATEGORY, GET_ALLPRODUCT, GET_CATEGORY_PRODUCT, ADD_TOD_CARD, DELETE_TO_CARD } from "./Types";

export const ProductState = ({ children }) => {
    const initialState = {
        data: [],
        categories: [],
        getAll: [],
        cart: [],
        loading: false,
        error: null
    }

    const [state, dispatch] = useReducer(ProductReducer, initialState)
    const getCategoryState = (data) => dispatch({ type: GET_CATEGORY, payload: data })
    const setGetAll = (data) => dispatch({ type: GET_ALLPRODUCT, payload: data })
    const getCategoryProduct = (data) => dispatch({ type: GET_CATEGORY_PRODUCT, payload: data })
    const addToCart = (id) => dispatch({ type: ADD_TOD_CARD, id })
    const deleteToCard = (id) => dispatch({ type: DELETE_TO_CARD, id })

    return (
        <MyContext.Provider value={{
            data: state.data,
            categories: state.categories,
            getAll: state.getAll,
            cart: state.cart,
            error: state.error,
            loading: state.loading,
            getCategoryState,
            setGetAll,
            getCategoryProduct,
            addToCart,
            deleteToCard
        }}>
            {children}
        </MyContext.Provider>
    )
}