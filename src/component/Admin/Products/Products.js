import React, { useRef } from "react";
import "./Products.css";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../actions/productAction";
import { useEffect } from "react";
import AddProduct from "../AddProduct.js/AddProduct";
import { useState } from "react";
import { Link } from "react-router-dom";

function Products({ open, set }) {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { error, loading, products } = productList;

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  // const ref = useRef();
  return(
  
    (
   
    <div>
      <div className="products">
        <div className="Products-main">
          <h1>Products</h1>
          <div className="product-button">
            <button
              onClick={() => {
                set(true);
              }}
            >
              Add Products
            </button>
            <button>Filters</button>
            <button>Download all</button>
          </div>
        </div>
        <div className="Products-container">
          <div className="products-header">
            <div>Products</div>
            <div>Buying Price</div>
            <div>Selling Price</div>
            <div>Quantity</div>
            <div>Expiry Date</div>
            <div>Availability</div>
          </div>
         
          <div className="products-list">
            
            {products?.map((product) => (
              <div className="products-indi" key={product.id}>
                <div>
                  <Link to={`/product/${product.id}`}>{product.name}</Link>
                </div>
                <div>{product.costPrice}</div>
                <div>{product.sellingPrice}</div>
                <div>{product.quantity}</div>
                <div>{Date.parse(product.purchaseDate)}</div>
                <div>{product.quantity > 0 ? "In stock" : "Out Of Stock"}</div>
              </div>
            ))}
            
          </div>
          
        </div>
      </div>
    </div>
  )

  )

}

export default Products;
