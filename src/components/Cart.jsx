import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import Empty from "./Empty";
import Swal from "sweetalert2";
import { authContext } from "../context/AuthContext";

function CartView() {
  const { cart, totalPurchase, clearCart } = useContext(CartContext);
  const { user } = useContext(authContext);
  const isLogin = () => {
    Swal.fire({
      title: "No estas logueado",
      text: "Tenes que loguearte para finalizar la compra",
      icon: "error",
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Ir al login",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "/login";
      }
    });
  };
  return (
    <div class="container mb-5">
      {cart.length === 0 ? (
        <Empty
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="300"
              height="300"
              fill="black"
              class="bi bi-cart-x"
              viewBox="0 0 16 16"
            >
              <path d="M7.354 5.646a.5.5 0 1 0-.708.708L7.793 7.5 6.646 8.646a.5.5 0 1 0 .708.708L8.5 8.207l1.146 1.147a.5.5 0 0 0 .708-.708L9.207 7.5l1.147-1.146a.5.5 0 0 0-.708-.708L8.5 6.793 7.354 5.646z" />
              <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
            </svg>
          }
          text={
            <h1>
              No se encuentran productos
              <br /> en el carrito
            </h1>
          }
        />
      ) : (
        <div class="d-flex flex-row align-items-start">
          <div class="col-8 d-flex flex-column m-2">
            {cart.map((products) => (
              <CartItem product={products} key={products.id} />
            ))}
          </div>
          <div class="col-4 order p-3 m-2">
            <h4>Orden Total</h4>
            <div class="d-flex flex-row justify-content-between p-2">
              <span class="billing-item fs-5">Total:</span>
              <span class="billing-cost fs-5">${totalPurchase()}</span>
            </div>
            <div class="d-flex mt-3">
              {user ? (
                <Link to="/checkout">
                  <button class="btn btn-primary flex-grow-1">
                    Realizar Compra
                  </button>
                </Link>
              ) : (
                <button
                  class="btn btn-primary flex-grow-1"
                  onClick={() => isLogin()}
                >
                  Realizar Compra
                </button>
              )}
              <button
                class="btn btn-danger flex-grow-1"
                onClick={() => clearCart()}
              >
                Limpiar Carro
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartView;
