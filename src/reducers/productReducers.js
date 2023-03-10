import { PRODUCT_LIST_REQUEST,
        PRODUCT_LIST_SUCCESS,
        PRODUCT_LIST_FAIL,
        PRODUCT_GET_REQUEST,
        PRODUCT_GET_SUCCESS,
        PRODUCT_GET_FAIL } from "../constants/productConstants";

export const getProducts = (state = {products:[]}, action) =>{
    switch(action.type){
        case PRODUCT_LIST_REQUEST:
            return { loading: true, products: [] }
        
        case PRODUCT_LIST_SUCCESS:
            return { loading:false, products:action.payload }

        case PRODUCT_LIST_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

export const getProduct = (state = {product:[]}, action) =>{
    switch(action.type){
        case PRODUCT_GET_REQUEST:
            return { loading: true, product:[] }
        
        case PRODUCT_GET_SUCCESS:
            return { loading:false, product:action.payload }

        case PRODUCT_GET_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}


