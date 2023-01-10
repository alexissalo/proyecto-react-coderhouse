import CartWidget from "./CartWidget";
import logo from "../img/sneakshoes.png";
import { Link } from "react-router-dom";
import { authContext } from "../context/AuthContext";
import { useContext } from "react";

const NavBar = () => {
  const { user } = useContext(authContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-black py-4">
      <div className="container">
        <div className="navbar-brand d-flex justify-content-between align-items-center order-lg-0">
          <Link to={"/"}>
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
          </Link>
        </div>
        <div className="order-lg-2 nav-btns">
          <button type="button" className="btn position-relative">
            {user ? (
              <Link to={"/account"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="white"
                  className="bi bi-person icon"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                </svg>
              </Link>
            ) : (
              <Link to={"/login"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="white"
                  className="bi bi-person"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                </svg>
              </Link>
            )}
          </button>
          <button type="button" className="btn position-relative">
            <Link to={"/favorites"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fill="white"
                className="bi bi-bookmark-heart icon"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"
                />
                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
              </svg>
            </Link>
          </button>
          <button type="button" className="btn position-relative">
            <Link to={"/cart"}>
              <CartWidget />
            </Link>
          </button>
        </div>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >
          <span className="navbar-toggler-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="white"
              className="bi bi-list icon"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </span>
        </button>
        <div className="collapse navbar-collapse order-lg-1" id="navMenu">
          <ul className="navbar-nav mx-auto text-center">
            <li className="nav-item px-2 py-2">
              <Link to="/" style={{ textDecoration: "none" }}>
                <p className="link">Todo</p>
              </Link>
            </li>
            <li className="nav-item px-2 py-2">
              <Link to="/category/hombre" style={{ textDecoration: "none" }}>
                <p className="link">Hombre</p>
              </Link>
            </li>
            <li className="nav-item px-2 py-2">
              <Link to="/category/mujer" style={{ textDecoration: "none" }}>
                <p className="link">Mujer</p>
              </Link>
            </li>
            <li className="nav-item px-2 py-2">
              <Link to="/category/niños" style={{ textDecoration: "none" }}>
                <p className="link">Niños</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
