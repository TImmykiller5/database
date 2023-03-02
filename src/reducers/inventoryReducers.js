import {
  INVENTORY_POST_SUCCESS,
  INVENTORY_POST_REQUEST,
  INVENTORY_POST_FAIL,
  TRANSACTION_RECORD_REQUEST,
  TRANSACTION_RECORD_SUCCESS,
  TRANSACTION_RECORD_FAIL,
} from "../constants/inventoryConstants";

export const postTransactionReducer = (state = {}, action) => {
  switch (action.type) {
    case INVENTORY_POST_REQUEST:
      return { loading: true };

    case INVENTORY_POST_SUCCESS:
      return {
        loading: false,
        success: true,
        response: action.payload,
      };

    case INVENTORY_POST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const transactionRecordReducer = (state = {record:[]}, action) => {
  switch (action.type) {
    case TRANSACTION_RECORD_REQUEST:
      return { loading: true, record: [] };

    case TRANSACTION_RECORD_SUCCESS:
      return { loading: false, record: action.payload };

    case TRANSACTION_RECORD_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
