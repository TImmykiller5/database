import React, { useEffect } from "react";
import "./store.css";
import { useState } from "react";
import { proxy } from "../../actions/inventoryActions";
import axios from "axios";

function Store() {
  const [postStore, setPostStore] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const store = {
      name: name,
      address: address,
    };
    const createStore = async () => {
      try {
        setPostStore({ loading: true });
        const { data } = await axios.post(`${proxy}db/store/`, store);
        setPostStore({ loading: false, store: data });

        setDisplay(!display);
      } catch (error) {
        setPostStore({
          loading: false,
          error: true,
          err: error.response.data.detail,
        });
      }
    };

    createStore();
  };

  const handleSubmitEdit = (e, id) => {
    e.preventDefault();
    // console.log(e, id, nameEdit, addressEdit)
    const store = {
        name: nameEdit,
        address: addressEdit,
        storeinstance:id
      };
      const createStore = async () => {
        try {
          setPostStore({ loading: true });
          const { data } = await axios.put(`${proxy}db/store/`, store);
          setPostStore({ loading: false, store: data });
  
          setEdit(!edit);
        } catch (error) {
          setPostStore({
            store:postStore.store,
            loading: false,
            error: true,
            err: error.response.data.detail,
          });
        }
      };
  
      createStore();
    
  }
  const [display, setDisplay] = useState(false);
  const [nameEdit, setNameEdit] = useState();
  const [name, setName] = useState();
  const [addressEdit, setAddressEdit] = useState();
  const [address, setAddress] = useState();
  const [edit, setEdit] = useState({ e: false });
  const [stores, setStores] = useState({});

  useEffect(() => {
    const getstores = async () => {
      try {
        setStores({ loading: true });
        const { data } = await axios.get(`${proxy}db/store/`);
        setStores({ stores: data, loading: false });
      } catch (error) {
        setStores({ err: error, loading: false, error: true });
      }
    };

    getstores();
  }, [postStore.store]);
  const { stores: storeList } = stores;
  return (
    <div className="Store-main">
      <div className="store-header">
        <h3>Manage Store</h3>

        <button onClick={() => setDisplay(!display)}>Add Store</button>
      </div>
      <div className={`${display ? "dActive" : "dInactive"} `}>
        {postStore.error ? (
          <div className="add-product-error">{postStore.err}</div>
        ) : (
          <div></div>
        )}
        <form className="add-store-form" onSubmit={handleSubmit}>
          <div className="form-control flex-form-control">
            <label>
              Name {"   "}:{" "}
              <input
                type="text"
                placeholder="Store Name"
                required
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </label>
          </div>
          <div className="form-control flex-form-control">
            <label>
              Address :{" "}
              <input
                type="text"
                required
                placeholder="Store Address"
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
            </label>
          </div>
          <div className="form-submit">
            <button className="credit-trans" type="submit">
              +
            </button>
          </div>
        </form>
      </div>
      <div className="store-container">
        {storeList?.map((Stor, i) => {
          if (edit.e && i === edit.key) {
            return (
              <form className="store-edit-form" onSubmit={(e)=>handleSubmitEdit(e, Stor.id)}>
                <div className="store-instance" key={i}>
                  <div className="store-instance-name">example branch</div>
                  <div className="store-instance-details-cont">
                    <div className="store-instance-details">
                      {/* <h4>{Stor.name}</h4> */}
                      <div className="form-control flex-form-control">
                        <label>
                          <input
                            type="text"
                            placeholder="Store Name"
                            required
                            defaultValue={Stor.name}
                            onChange={(e) => {
                              setNameEdit(e.target.value);
                            }}
                          />
                        </label>
                      </div>
                      <span>
                        <label>
                          <input
                            type="text"
                            placeholder="Store Name"
                            required
                            defaultValue={Stor.address}
                            onChange={(e) => {
                              setAddressEdit(e.target.value);
                            }}
                          />
                        </label>
                      </span>
                      <span>some detail</span>
                      <span>08099999999</span>
                    </div>
                    <div>
                      <button type="submit" onClick={() => {}}>
                        Save
                      </button>
                      <button
                        key={i}
                        onClick={(e) => {
                          setEdit({ e: !edit.e, key: i });
                        }}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            );
          } else {
            return (
              <div>
                <div className="store-instance" key={i}>
                  <div className="store-instance-name">example branch</div>
                  {/* {console.log(i)} */}
                  <div className="store-instance-details-cont">
                    <div className="store-instance-details">
                      <h4>{Stor.name}</h4>
                      <span>{Stor.address}</span>
                      <span>some detail</span>
                      <span>08099999999</span>
                    </div>
                    <div>
                      <button
                        key={i}
                        onClick={(e) => {
                          setEdit({ e: !edit.e, key: i });
                          // console.log(edit);
                          setNameEdit(Stor.name);
                          setAddressEdit(Stor.address);
                        }}
                      >
                        edit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default Store;
