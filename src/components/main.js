import { addToCart, clearCart, removeFromCart } from "../redux/actions/action";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../redux/actions/productAction";

import "./main.css";
import { useEffect } from "react";

function Main() {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.productData);
  console.warn("data from main comp from saga", data);
  const productData = {
    id: "1",
    name: "iPhone",
    price: "84000",
    date: "27/08/2022",
    type: "mobile",
  };

  useEffect(() => {
    dispatch(listProducts());
  }, []);
  return (
    <div className="Main">
      <div>
        <button onClick={() => dispatch(clearCart())}>Clear cart</button>
      </div>
      {/* <div>
        <button onClick={() => dispatch(addToCart(productData))}>
          Add to cart
        </button>
      </div> */}

      <div className="product__container">
        {data.map((item) => (
          <div className="product__item">
            <img src={item.photo} alt="" />
            <div>Name : {item.name} </div>
            <div>Price : {item.price} </div>
            <div>Category : {item.category} </div>
            <div>Brand : {item.brand} </div>
            <div>
              <button onClick={() => dispatch(addToCart(item))}>
                Add to Cart
              </button>
              <button onClick={() => dispatch(removeFromCart(item.id))}>
                Remove From Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* <div>
        <button onClick={() => dispatch(removeFromCart(productData.id))}>
          Remove Item
        </button>
      </div>
      <div>
        <button onClick={() => dispatch(clearCart())}>Clear cart</button>
      </div>

      <div>
        <button onClick={() => dispatch(listProducts())}>
          List all Products
        </button>
      </div> */}
    </div>
  );
}

export default Main;
