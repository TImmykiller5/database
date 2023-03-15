import thunk from "redux-thunk";
import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { getProducts, getProduct, newProductReducer } from "./reducers/productReducers";
import { postTransactionReducer, transactionRecordReducer, TopProductReducer  } from "./reducers/inventoryReducers";



const reducer = combineReducers(
    {
        productList: getProducts,
        inventory:getProduct,
        transaction: postTransactionReducer,
        transactionRecord:transactionRecordReducer,
        newProduct: newProductReducer,
        topProduct: TopProductReducer,

    }
)

const initialState = {
}

const middleware = [thunk]

const store = createStore(reducer, initialState,
    composeWithDevTools(applyMiddleware(...middleware)))

export default store