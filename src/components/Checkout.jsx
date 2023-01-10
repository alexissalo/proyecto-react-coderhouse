import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { authContext } from "../context/AuthContext";
import Swal from "sweetalert2";
import Loader from "./Loader";

function Checkout() {
  const { user, userId } = useContext(authContext);
  const navigate = useNavigate();
  const { cart, totalPurchase, clearCart } = useContext(CartContext);
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [direccion, setDireccion] = useState();
  const todayDate = new Date().toISOString().slice(0, 10);
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 500);
  const handleSubmit = (e) => {
    e.preventDefault();
    const order = {
      buyer: {
        name: name,
        phone: phone,
        email: user.email,
        direccion: direccion,
      },
      items: cart.map((prod) => ({
        id: prod.id,
        title: prod.name,
        price: prod.price,
        quantity: prod.quantity,
      })),
      date: todayDate,
      total: totalPurchase(),
      idUser: userId,
    };
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then(({ id }) =>
      Swal.fire({
        title: "Congratulations!",
        text: "Toma el numero de pedido\n" + id,
        icon: "success",
      }).then(function () {
        clearCart();
        navigate("/");
      })
    );
  };
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="container mb-5">
          <div className="py-5 text-center rounded border border-1 m-2">
            <h3>
              Comprando como <b className="link-primary">{user.email}</b>
            </h3>
          </div>
          <div className="py-5 text-center">
            <h1>Checkout</h1>
            <hr className="my-4" />
          </div>
          <div class="row g-3">
            <div class="order-md-last">
              <div class="d-flex justify-content-center align-items-center mb-3">
                <h2>Tu carrito</h2>
              </div>
              <ul class="list-group mb-3">
                {cart.map((item) => {
                  return (
                    <li class="list-group-item d-flex justify-content-between lh-sm">
                      <div>
                        <h6 class="my-0 text-uppercase">{item.name}</h6>
                        <small class="text-muted">
                          Cantidad:{item.quantity}
                        </small>
                      </div>
                      <span class="text-muted">
                        ${item.price * item.quantity}
                      </span>
                    </li>
                  );
                })}
                <li class="list-group-item d-flex justify-content-between">
                  <span>Total:</span>
                  <strong>${totalPurchase()}</strong>
                </li>
              </ul>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <div className="col-md-7 col-lg-8">
              <h2 className="mb-3">Datos Personales</h2>
              <form className="needs-validation" onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-12">
                    <label for="Name" className="form-label">
                      Nombre y Apellido
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <label for="phone" className="form-label">
                      Telefono<span className="text-muted"></span>
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <label for="direccion" className="form-label">
                      Direccion
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={(e) => {
                        setDireccion(e.target.value);
                      }}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <label for="email" className="form-label">
                      Correo
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      value={user.email}
                      disabled
                      required
                    />
                  </div>
                </div>
                <hr className="my-4" />
                <h2 className="mb-3">Datos de Compra</h2>
                <div className="row gy-3">
                  <div className="col-md-6">
                    <label className="form-label">Nombre de titular</label>
                    <input type="text" className="form-control" required />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Nro de tarjeta</label>
                    <input type="text" className="form-control" required />
                  </div>
                  <div className="col-md-3">
                    <label className="form-label">Fecha de vto</label>
                    <input type="date" className="form-control" required />
                  </div>
                  <div className="col-md-3">
                    <label className="form-label">CVV</label>
                    <input type="text" className="form-control" required />
                  </div>
                </div>
                <hr className="my-4" />
                <button
                  className="w-100 btn btn-primary btn-lg"
                  type="submit"
                  disabled={cart.length === 0}
                >
                  Realizar compra
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Checkout;
