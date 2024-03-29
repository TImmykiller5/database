import {
  INVENTORY_POST_SUCCESS,
  INVENTORY_POST_REQUEST,
  INVENTORY_POST_FAIL,
  TRANSACTION_RECORD_REQUEST,
  TRANSACTION_RECORD_SUCCESS,
  TRANSACTION_RECORD_FAIL,
  TOP_PRODUCT_REQUEST,
  TOP_PRODUCT_SUCCESS,
  TOP_PRODUCT_FAIL,
} from "../constants/inventoryConstants";
import axios from "axios";
export const proxy = "https://web-production-a58f.up.railway.app/";

export const postTransaction = (transaction) => async (dispatch) => {
  try {
    dispatch({
      type: INVENTORY_POST_REQUEST,
    });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      `${proxy}db/post-transaction/`,
      transaction,
      config
    );

    dispatch({
      type: INVENTORY_POST_SUCCESS,
      payload: data,
    });

    dispatch(getTransactionRecord());
  } catch (error) {
    dispatch({
      type: INVENTORY_POST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getTransactionRecord = (p) => async (dispatch) => {
  try {
    dispatch({ type: TRANSACTION_RECORD_REQUEST });

    if (p) {
      const params = p;
    } else {
      const params = {};
    }
    const { data } = await axios.get(
      `${proxy}db/get-records/`,
      {params:p}
    );

    // const { data } = await axios.get(`${proxy}db/get-records/`);
    dispatch({
      type: TRANSACTION_RECORD_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TRANSACTION_RECORD_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};


export const getTopProduct = () => async (dispatch) => {
  try {
    dispatch({ type: TOP_PRODUCT_REQUEST });
    
    const { data } = await axios.get(
      `${proxy}db/get-top-product/`
    );

    dispatch({
      type: TOP_PRODUCT_SUCCESS,
      payload: data,
    });

  } catch (error) {
    dispatch({
      type: TOP_PRODUCT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
