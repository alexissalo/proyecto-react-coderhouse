import {
  getFirestore,
  collection,
  getDocs,
  where,
  query,
} from "firebase/firestore";
import { useState, useEffect, useContext } from "react";
import { authContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Loader from "./Loader";
import Empty from "./Empty";

function Account() {
  const { logout, user, resetPassword, userId } = useContext(authContext);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const db = getFirestore();
    const queryFilter = query(
      collection(db, "orders"),
      where("idUser", "==", userId)
    );
    getDocs(queryFilter)
      .then((response) => {
        setOrders(
          response.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
        );
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [userId]);

  const LogoutMessage = () => {
    Swal.fire({
      title: "Queres cerrar sesion?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirmar",
    }).then((result) => {
      if (result.isConfirmed) {
        logout();
        navigate("/");
      }
    });
  };

  const ResetPasswordMessage = () => {
    Swal.fire({
      title: "Restablecer contraseña",
      text: "Se te enviara un correo para restablecer tu contraseña.Verifica la casilla spam",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Enviar mensaje",
    }).then((result) => {
      if (result.isConfirmed) {
        resetPassword(user.email);
      }
    });
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="container d-flex flex-column align-items-center p-5">
          <div className="col-md-4 d-flex flex-column m-2">
            <div className="list-group">
              <button className="list-group-item list-group-item-action list-group-item-success active">
                Mis Compras
              </button>
              <button
                className="list-group-item list-group-item-action list-group-item-warning"
                onClick={() => ResetPasswordMessage()}
              >
                Restablecer Contraseña
              </button>
              <button
                className="list-group-item list-group-item-action list-group-item-danger"
                onClick={() => LogoutMessage()}
              >
                Cerrar sesion
              </button>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-lg-1 g-4 m-2 bg-dark rounded p-2 justify-content-center">
            {orders.length === 0 ? (
              <Empty
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="150"
                    height="150"
                    fill="white"
                    class="bi bi-x-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                  </svg>
                }
                text={
                  <h1 className="text-white">
                    No se encuentran compras realizadas
                  </h1>
                }
              />
            ) : (
              orders.map((item) => {
                return (
                  <div className="col card text-bg-light m-1">
                    <div className="card-header">
                      N° de Pedido: <b>{item.id}</b>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">Fecha: {item.date}</h5>
                      <h5>Items:</h5>
                      <p className="card-text">
                        {item.items.map((e) => {
                          return (
                            <div className="bg-dark text-white rounded">
                              <small className="text-uppercase">
                                {e.title}-${e.price}-X{e.quantity}
                              </small>
                            </div>
                          );
                        })}
                      </p>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Account;
