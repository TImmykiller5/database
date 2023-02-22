import React, { useEffect } from "react";
import "./ProductScreen.css";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getProduct } from "../../../actions/productAction";

function ProductScreen() {
  const inventory = useSelector((state) => state.inventory);
  const { error, loading, product } = inventory;
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    
    dispatch(getProduct(params.id));
  }, [dispatch, params.id]);

  return (
    <div className="main">
      <div className="header">
        <div className="header-top">
          <h2>{product.name}</h2>
          <div className="product-button">
            <button>
                <div id="edit-button">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.1665 2.49993C14.3854 2.28106 14.6452 2.10744 14.9312 1.98899C15.2171 1.87054 15.5236 1.80957 15.8332 1.80957C16.1427 1.80957 16.4492 1.87054 16.7352 1.98899C17.0211 2.10744 17.281 2.28106 17.4998 2.49993C17.7187 2.7188 17.8923 2.97863 18.0108 3.2646C18.1292 3.55057 18.1902 3.85706 18.1902 4.16659C18.1902 4.47612 18.1292 4.78262 18.0108 5.06859C17.8923 5.35455 17.7187 5.61439 17.4998 5.83326L6.24984 17.0833L1.6665 18.3333L2.9165 13.7499L14.1665 2.49993Z"
                  stroke="#5D6679"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span> Edit</span>
              </div>
            </button>
            <button>Download</button>
          </div>
        </div>
        <div className="header-bottom">
          <p>Overview</p>
          <p>Purchases</p>
          <p>Adjustment</p>
          <p>History</p>
        </div>
      </div>
      <div>
        <div className="product-details-img"></div>
        <div className="product-details">
        <div className="primary-details"></div>
        <div className="supplier-details"></div>
        <div className="stock-locations"></div>
        </div>
      </div>
    </div>
  );
}

export default ProductScreen;
