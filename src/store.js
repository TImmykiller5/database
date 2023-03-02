import thunk from "redux-thunk";
import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { getProducts, getProduct } from "./reducers/productReducers";
import { postTransactionReducer, transactionRecordReducer } from "./reducers/inventoryReducers";



const reducer = combineReducers(
    {
        productList: getProducts,
        inventory:getProduct,
        transaction: postTransactionReducer,
        transactionRecord:transactionRecordReducer,

    }
)

const initialState = {
}

const middleware = [thunk]

const store = createStore(reducer, initialState,
    composeWithDevTools(applyMiddleware(...middleware)))

export default store