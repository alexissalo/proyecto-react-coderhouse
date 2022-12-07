import CartWidget from "./CartWidget";
import logo from "../img/sneakshoes.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{ background: "black" }}
    >
      <div className="container-fluid">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div
            className="navbar-brand me-auto"
            style={{
              color: "#ff1701",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <img
              src={logo}
              alt="logo"
              style={{
                width: "120px",
                heigth: "120px",
                borderRadius: "50%",
                border: "2px solid #ff1701",
              }}
            />
            SNEAK SHOES
          </div>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" style={{ margin: "20px" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="white"
              class="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" style={{ textDecoration: "none" }}>
                <p className="link">Todo</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/category/hombre" style={{ textDecoration: "none" }}>
                <p className="link">Hombre</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/category/mujer" style={{ textDecoration: "none" }}>
                <p className="link">Mujer</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/category/niños" style={{ textDecoration: "none" }}>
                <p className="link">Niños</p>
              </Link>
            </li>
          </ul>
        </div>
        <CartWidget contador="1" />
      </div>
    </nav>
  );
};

export default NavBar;
