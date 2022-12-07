import { Link } from "react-router-dom";

function Item({ name, price, img }) {
  return (
    <div className="col">
      <div className="card bg-dark">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h4
            className="card-title text-white"
            style={{ textTransform: "uppercase" }}
          >
            {name}
          </h4>
          <p className="card-text text-white">$ {price}</p>
          <Link to={`/item/${name}`}>
            <button className="btn btn-success">Comprar Ahora</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Item;
