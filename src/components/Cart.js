import { useDispatch, useSelector } from "react-redux";
import ItemsList from "./ItemsList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = ()=>{
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4 ">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div
        className="flex
             flex-col py-2 m-auto w-6/12"
      >
        <button className="px-4 bg-blue-100 rounded-lg hover:bg-blue-500" onClick={handleClearCart}>
          Clear Cart
        </button>
        {cartItems.length === 0 && <h1>Add Items In The Cart</h1>}
        <ItemsList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
