import "./TransactionScreen.css";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../actions/productAction";
import {
  postTransaction,
  getTransactionRecord,
} from "../../actions/inventoryActions";
import axios from "axios";
import { proxy } from "../../actions/inventoryActions";

function TransactionScreen(Product) {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { errors, loadings, products } = productList;
  const inventory = useSelector((state) => state.inventory);
  const { error, loading, product } = inventory;
  const transactionRecord = useSelector((state) => state.transactionRecord);
  const { err = error, loadingT = loading, record } = transactionRecord;

  const[store, setStore] = useState({st:''})
  const allStores = store.st
  
  const [produce, setProduce] = useState(product.name);
  const [quantity, setQuantity] = useState(0);
  const [stores, setStores] = useState();
  const [date, setDate] = useState("");
  const [transactionType, settransactionType] = useState();

  const options = [products?.map((p) => ({ value: p.name, label: p.name }))];
  const creditHandler = (e) => {
    e.preventDefault();
    setProduce(e.target[0].value);
    setQuantity(e.target[1].value);
    setDate(e.target[2].value);
    setStores(e.target[3].value);

  };

  const [display, setDisplay] = useState(false);
  useEffect(() => {
    if (products?.length === 0) {
      dispatch(getProducts());
    }
    dispatch(getTransactionRecord());

    const getStore = async () => {
      try {
        setStore({  loading: true });
        const { data } = await axios.get(`${proxy}db/store/`);
        setStore({ st: data, loading: false });
        // console.log(store)
  
      } catch (error) {
        setStore({ err: error, loading: false, error: true });
      }
    };
    // console.log(store)

    getStore()
    
  }, []);
  const post = () => {
    dispatch(
      postTransaction({
        product: produce,
        quantity: quantity,
        store: stores,
        date: date,
        transactionType: transactionType,
      })
    );
  };

  return (
    
    <div className="trans-main">
      {/* {console.log(store)} */}
      <div>
        <div></div>
      </div>
      <div className="form-cont">
        <div
          className={`${display ? "dActive" : "dInactive"} form-inner-cont `}
        >
          <div>
            <form className="form" onSubmit={creditHandler}>
              <div className="form-control flex-form-control">
                <label>
                  <h3>Product</h3>
                  <select name="name" required>
                    {options?.map((o) =>
                      o?.map((p) => (
                        <option
                          selected={p.label === product.name && "selected"}
                          value={p.value}
                        >
                          {" "}
                          {p.label}{" "}
                        </option>
                      ))
                    )}
                  </select>
                </label>
              </div>
              <div className="form-control flex-form-control">
                <label>
                  <h3>Quantity</h3>
                  <input name="Quantity" type="number" required />
                </label>
              </div>
              <div className="form-control flex-form-control">
                <label>
                  <h3>Date</h3>
                  <input name="Date" type="datetime-local" required />
                </label>
              </div>
              <div className="form-control flex-form-control">
                <label>
                  <h3>Store</h3>
                  <select name="Store" required>
                    {/* {console.log(store)} */}
                    {
                    allStores && allStores?.map((s) => (
                      <option value={s.name}>{s.name}</option>
                    ))}
                  </select>
                </label>
              </div>
              <div className="form-submit">
                <button
                  className="credit-trans"
                  onClick={() => settransactionType("Stock Purchase")}
                  type="submit"
                >
                  +
                </button>
                <button
                  onClick={() => settransactionType("Sale")}
                  className="debit-trans"
                  type="submit"
                >
                  -
                </button>
              </div>
            </form>
          </div>
          <div className="t-summary-cont">
            <div>
              <h2>Transaction Summary</h2>
              <h4>
                Transaction Type: <span
                className={`${transactionType=== 'Sale' ? 'sale-transaction':'stock-transaction'} `}
                >{transactionType ? transactionType : ""}</span>
              </h4>
              <h4>Product: {produce ? produce : ""}</h4>
              <h4>Quantity: {quantity ? quantity : ""}</h4>
              <h4>Transaction Date: {date ? date : ""}</h4>
              <h4>Store: {stores ? stores : ""}</h4>
            </div>
            <div>
              <button
                onClick={() => {
                  post();
                  setDisplay(!display);
                }}
                disabled={produce&&quantity&&date&&store&&transactionType?false:true}
              >
                Post Transaction
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button
          onClick={() => {
            setDisplay(!display);
          }}
        >
          New Transaction
        </button>
      </div>

      <div className="transaction-record-cont">
        {record?.map((rec,i) => (
          <div key={i} className={`transaction-record
           `}>
            <div>{rec.id}</div>
            <div>{rec.ProductName}</div>
            <div>{rec.quantity}</div>
            <div className={`${rec.transactionType=== 'Sale' ? 'sale-transaction':'stock-transaction'} `}
            >{rec.transactionType}</div>
            <div>{rec.transactionDate.split("T")[0]}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TransactionScreen;
