import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../components/ItemDetail";
import Data from "../products.json";

function ItemDetailContainer() {
  const [productos, setProductos] = useState([]);
  const { itemId } = useParams();

  useEffect(() => {
    const FiltrarProductos = Data.filter((item) => {
      return item.name === itemId;
    });
    setProductos(FiltrarProductos);
  }, [itemId]);
  return (
    <div
      className="d-flex align-center justify-content-center"
      style={{ padding: "50px" }}
    >
      {productos.map((item) => (
        <ItemDetail
          name={item.name}
          price={item.price}
          img={item.img}
          description={item.description}
        />
      ))}
    </div>
  );
}

export default ItemDetailContainer;
