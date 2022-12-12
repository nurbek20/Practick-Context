import {GET_CATEGORY, GET_ALLPRODUCT, GET_CATEGORY_PRODUCT,ADD_TOD_CARD} from './Types'

export const ProductReducer=(state,action)=>{
    // console.log("state", action)
    switch(action.type){
        case GET_CATEGORY :{
            return {
                ...state,
                categories:action.payload
            }
        }
        case GET_ALLPRODUCT:{
            return {
                ...state,
                getAll:action.payload
            }
        }
        case GET_CATEGORY_PRODUCT:{
            return{
                ...state,
                data:action.payload
            }
        }
        case ADD_TOD_CARD:{
            const {id}=action;
            const {cart, data}=state;
            const element=data.find((elem)=>elem.id===id)
            const newArr=[...cart, element];
            return{
                ...state,
                cart:newArr
            }
        }

        default:
            return state
    }
}