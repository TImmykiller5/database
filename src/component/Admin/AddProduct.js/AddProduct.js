import React from "react";
import "./addProduct.css";
import { useState } from "react";
import { addProduct, getProducts } from "../../../actions/productAction";
import { useDispatch } from "react-redux";
import { PRODUCT_CREATE_RESET } from "../../../constants/productConstants";
import { useSelector } from "react-redux";

function AddProduct({ open, set }) {
  const postResult = useSelector((state) => state.newProduct) 
  const {loading, error, result} = postResult
  const dispatch = useDispatch()
  const[name, setName] = useState()
  const[brand, setBrand] = useState()
  const[BP, setBP] = useState()
  const[SP, setSP] = useState()
  if (!open) return null;

  


  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addProduct({
      name:name,
      brand:brand,
      costPrice:BP,
      sellingPrice:SP
    }, set))
    // dispatch(getProducts());


  }

  return (
    <div
      className="overlay"
      onClick={() => {
          
        set(false)
        dispatch({type: PRODUCT_CREATE_RESET})
      }}
    >
      <div className="addProduct" onClick={(e) => e.stopPropagation()}>
        <div className="Add-Product-Cont">
          <div className="New-Product">
            {" "}
            {error ? (<div className="add-product-error">{error}</div>):(<div></div>)}
            <h2>New Products</h2>
          </div>
          <div className="New-Product-Details">
            <div>
              <form onSubmit={handleSubmit}>
                <div classname="form-control">
                  <label>
                    <p>Name</p>
                    <input name="name" required value={name} 
                    onChange={(e)=> {setName(e.target.value)}} 
                    />
                  </label>
                </div>
                <div classname="form-control">
                  <label>
                    <p>Brand</p>
                    <input 
                    name="brand" required value={brand} 
                    onChange={(e)=> {setBrand(e.target.value)}}
                    />
                  </label>
                </div>
                <div classname="form-control">
                  <label>
                    <p>Buying Price</p>
                    <input 
                    name="cost-price"
                    type="number" required value={BP} 
                    onChange={(e)=> {setBP(e.target.value)}}
                    />
                  </label>
                </div>
                <div classname="form-control">
                  <label>
                    <p>Selling Price</p>
                    <input name="selling-price"
                    type="number" required value={SP} 
                    onChange={(e)=> {setSP(e.target.value)}}
                    />
                  </label>
                </div>
                <div classname="form-control">
                  <button type="submit">Add Product</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
