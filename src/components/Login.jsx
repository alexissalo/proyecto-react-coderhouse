import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../context/AuthContext";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { login } = useContext(authContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(user.email, user.password);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
          <div className="card bg-dark text-white">
            <div className="card-body p-5 text-center">
              <div className="mb-md-5 mt-md-4 pb-5">
                <h1 className="fw-bold mb-2 text-uppercase">Login</h1>
                <form onSubmit={handleSubmit}>
                  <div className="form-outline form-white mb-4">
                    <label className="form-label" for="typeEmailX">
                      Email
                    </label>
                    <input
                      type="email"
                      id="typeEmailX"
                      className="form-control form-control-lg"
                      onChange={(e) =>
                        setUser({ ...user, email: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-outline form-white mb-4">
                    <label className="form-label" for="typePasswordX">
                      Contraseña
                    </label>
                    <input
                      type="password"
                      id="typePasswordX"
                      className="form-control form-control-lg"
                      onChange={(e) =>
                        setUser({ ...user, password: e.target.value })
                      }
                    />
                  </div>
                  <p className="mb-5 pb-lg-2 btn-link fw-bold text-white-50 pe-">
                    Olvidaste tu contraseña?
                  </p>
                  <button
                    className="btn btn-outline-success btn-lg px-5"
                    type="submit"
                  >
                    Login
                  </button>
                </form>
              </div>
              <div>
                <p className="mb-0">
                  No tenes cuenta?
                  <Link to={"/register"}>
                    <button className="text-white-50 fw-bold btn btn-link">
                      Registrate
                    </button>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
