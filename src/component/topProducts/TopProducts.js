import React, { useState, useEffect } from "react";
import "./TopProducts.css";
import { useSelector, useDispatch } from "react-redux";
import { getTopProduct } from "../../actions/inventoryActions";
import { proxy } from "../../actions/inventoryActions";
import axios from "axios";

function TopProducts(topP) {
  const TopThree = topP.topP?.topProduct;
  // console.log(topP);
  // console.log(TopThree)


  const dispatch = useDispatch();

  useEffect(() => {
   
  }, [dispatch]);

  return (
    // total &&
    <div className="main2">
      <div className="top-products">
        <h2>Top Products</h2>

        <div className="top-list">
          <div className="top-list-numbering">
            <p>#</p>
            <p>Name</p>
            <p>Popularity</p>
            <p>Sales</p>
          </div>
          {TopThree?.length > 1 &&
            TopThree?.map((product, i = 0) => {
              const colors = ["#FCB859", "#A9DFD8", "#28AEF3", "#F2C8ED"];
              const transColors = [
                "rgb(252 184 89 / 0.12)",
                "rgb(169 223 216 / 0.12)",
                "rgb(40 174 243 / 0.12)",
                "rgb(242 200 237 / 0.12)",
              ];
              const total = TopThree.reduce(
                (acc, prod) => (acc += prod.quantity),
                0
              );
              const percent = Math.round(100 * (product.quantity / total));

              i++;
              return (
                <div className="top-list-item" key={i}>
                  <div
                    className="Product-Position"
                    style={{ fontWeight: "500" }}
                  >
                    0{i}
                  </div>
                  <div className="Product-Name" style={{ fontWeight: "500" }}>
                    {product.productName}
                  </div>
                  <div className="Product-popularity">
                    <div
                      className="bar"
                      style={{
                        "--color": colors[i - 1],
                        "--barWidth": `${percent}%`,
                      }}
                    ></div>
                  </div>
                  <div
                    className="Product-sales Sales-box"
                    style={{
                      "--bgcolor": transColors[i - 1],
                      "--color": colors[i - 1],
                    }}
                  >
                    {percent}%
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div className="customer-fulfilment">
        <div className="progress"></div>
      </div>
    </div>
  );
}

export default TopProducts;
