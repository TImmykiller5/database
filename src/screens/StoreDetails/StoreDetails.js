import React, { useEffect, useState } from "react";
import { proxy } from "../../actions/inventoryActions";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import './StoreDetails.css'

function StoreDetails() {
  const [store, setStore] = useState({});
  const params = useParams();
  //   console.log(params)

  useEffect(() => {
    const getProduct = async () => {
      try {
        setStore({ loading: true });
        const { data } = await axios.get(`${proxy}db/store/${params.id}/`);
        setStore({ Store: data, loading: false });
      } catch (error) {
        setStore({ err: error, loading: false, error: true });
      }
    };

    getProduct();
    // dispatch(getTopProduct());
  }, []);
  const {Store} = store
  
  return (
    <div>
      <div className="store-products">
        
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
            {Store?.map((product) => (
              <div className="products-indi" key={product.id}>
                <div>
                  <div className="stock-count">
                      {product.productName}
                  </div>
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
  );
}

export default StoreDetails;
