import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_CREATE_FAIL,
  PRODUCT_GET_REQUEST,
  PRODUCT_GET_SUCCESS,
  PRODUCT_GET_FAIL,
} from "../constants/productConstants";
import axios from "axios";
const proxy = "http://127.0.0.1:8000/"


export const getProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });
    const { data } = await axios.get(`${proxy}db/products/`);
    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const addProduct = (order, set) => async (dispatch) =>{
    try {
        dispatch({ type: PRODUCT_CREATE_REQUEST });

        const { data } = await axios.post(`${proxy}db/add-product/`,
            order);

        dispatch({
          type: PRODUCT_CREATE_SUCCESS,
          payload: data,
        } );
        set(false)
        dispatch(getProducts())

      } catch (error) {

        dispatch({
          type: PRODUCT_CREATE_FAIL,
          payload:
            error.response && error.response.data.detail
              ? error.response.data.detail
              : error.message,
        });
        set(true)
      }
}

export const getProduct = (id) => async (dispatch) => {
    try {
      dispatch({ type: PRODUCT_GET_REQUEST });
      const { data } = await axios.get(`${proxy}db/get-product/${id}/`);
      dispatch({
        type: PRODUCT_GET_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        
        type: PRODUCT_GET_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };