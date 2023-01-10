import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
  const { totalQty } = useContext(CartContext);
  return (
    <div
      className="carrito navbar-brand"
      style={{ position: "relative", cursor: "pointer", margin: "10px" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        fill="white"
        className="bi bi-cart2 icon"
        viewBox="0 0 16 16"
      >
        <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
      </svg>
      <span
        className="contador"
        style={{
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "gray",
          position: "absolute",
          padding: "5px",
          borderRadius: "100%",
          bottom: "-5px",
          left: "0",
          height: "30px",
          width: "30px",
          border: "2px solid #000",
          fontWeight: "600",
        }}
      >
        {totalQty()}
      </span>
    </div>
  );
};

export default CartWidget;
