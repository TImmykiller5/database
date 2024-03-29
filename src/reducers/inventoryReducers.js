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
      return { Loading: true, record: [] };

    case TRANSACTION_RECORD_SUCCESS:
      return { Loading: false, record: action.payload };

    case TRANSACTION_RECORD_FAIL:
      return { Loading: false, error: action.payload };

    default:
      return state;
  }
};

export const TopProductReducer = (state = {topProduct:[]}, action) => {
  switch (action.type) {
    case TOP_PRODUCT_REQUEST:
      return { loading: true, topProduct: [] };

    case TOP_PRODUCT_SUCCESS:
      return { loading: false, topProduct: action.payload };

    case TOP_PRODUCT_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};