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

export const getProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });
    const { data } = await axios.get("db/products");
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

export const addProduct = (order) => async (dispatch) =>{
    try {
        dispatch({ type: PRODUCT_CREATE_REQUEST });

        const { data } = await axios.post("db/add-product/",
            order);

        dispatch({
          type: PRODUCT_CREATE_SUCCESS,
          payload: data,
        });

      } catch (error) {
        dispatch({
          type: PRODUCT_CREATE_FAIL,
          payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        });
      }
}

export const getProduct = (id) => async (dispatch) => {
    try {
      dispatch({ type: PRODUCT_GET_REQUEST });
      console.log('db')
      const { data } = await axios.get(`/db/get-product/${id}/`);
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