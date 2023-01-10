import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CartItem({ product }) {
  const { removeItem } = useContext(CartContext);
  return (
    <div class="cart-item p-3">
      <div class="d-flex flex-row">
        <img class="col-2 img-fluid" src={product.img} alt="" />
        <div class="col-6 p-2">
          <h5 style={{ textTransform: "uppercase" }}>{product.name}</h5>
          <h6>Cantidad: {product.quantity}</h6>
          <p>${product.price}</p>
        </div>
        <button
          class="d-flex justify-content-center align-items-center btn btn-danger"
          onClick={() => removeItem(product.id)}
        >
          X
        </button>
      </div>
    </div>
  );
}

export default CartItem;
