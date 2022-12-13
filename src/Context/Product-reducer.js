import { GET_CATEGORY, GET_ALLPRODUCT, GET_CATEGORY_PRODUCT, ADD_TOD_CARD, DELETE_TO_CARD } from './Types'

export const ProductReducer = (state, action) => {
    // console.log("state", action)
    switch (action.type) {
        case GET_CATEGORY: {
            return {
                ...state,
                categories: action.payload
            }
        }
        case GET_ALLPRODUCT: {
            return {
                ...state,
                getAll: action.payload
            }
        }
        case GET_CATEGORY_PRODUCT: {
            return {
                ...state,
                data: action.payload
            }
        }
        case ADD_TOD_CARD: {
            const { id } = action;
            const { cart, data } = state;
            const element = data.find((elem) => elem.id === id)
            const newArr = [...cart, element];
            if (newArr) {
                alert("Товар Добавлено")
            }
            return {
                ...state,
                cart: newArr
            }
        }
        case DELETE_TO_CARD: {
            const { id } = action
            const { cart } = state;
            const newArr = cart.filter((elem) => elem.id !== id)
            if (newArr) {
                alert("Товар удалено")
            }
            return {
                ...state,
                cart: newArr,
            }
        }

        default:
            return state
    }
}