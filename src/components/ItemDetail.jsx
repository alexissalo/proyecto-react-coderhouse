import { useContext, useState } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function ItemDetail({ products }) {
  const { addItem } = useContext(CartContext);
  const { isInCart } = useContext(CartContext);
  const [buy, setBuy] = useState(true);
  const [qty, setqty] = useState(1);
  const handleAddCart = () => {
    if (isInCart(products.id)) {
      setBuy(false);
    } else {
      if (qty > 0) {
        setBuy(false);
        const newproducts = { ...products, quantity: qty };
        addItem(newproducts);
      }
    }
  };
  return (
    <div className="container mb-5">
      <div className="row d-flex flex-row">
        <div className="col-md-5 products-image">
          <img className="img-fluid" src={products.img} alt="" />
        </div>
        <div className="col-md-7">
          <h2 className="fs-3" style={{ textTransform: "uppercase" }}>
            {products.name}
          </h2>
          <h5 className="text-secondary fs-6 fw-bold">${products.price}</h5>
          {buy ? (
            <>
              <ItemCount
                quantity={qty}
                modifyQuantity={setqty}
                onAdd={handleAddCart}
                stock={products.stock}
              ></ItemCount>
            </>
          ) : (
            <>
              <Link to={"/cart"}>
                <button className="btn btn-success mt-2">
                  Terminar compra
                </button>
              </Link>
            </>
          )}
          <div>
            <span className="text-secondary text-small">Detalles :</span>

            <div className="accordion accordion-flush" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Descripcion
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">{products.description}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
