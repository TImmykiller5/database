import {
  INVENTORY_POST_SUCCESS,
  INVENTORY_POST_REQUEST,
  INVENTORY_POST_FAIL,
  TRANSACTION_RECORD_REQUEST,
  TRANSACTION_RECORD_SUCCESS,
  TRANSACTION_RECORD_FAIL,
} from "../constants/inventoryConstants";
import axios from "axios";
const proxy = "http://127.0.0.1:8000/";

export const postTransaction = (transaction) => async (dispatch) => {
  console.log(transaction);
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

    dispatch(getTransactionRecord())

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

export const getTransactionRecord = () => async (dispatch) => {
  try {
    dispatch({ type: TRANSACTION_RECORD_REQUEST });
    const { data } = await axios.get(`${proxy}db/get-records/`);
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
