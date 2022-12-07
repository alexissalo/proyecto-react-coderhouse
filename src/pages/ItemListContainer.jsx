import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../components/ItemList";
import Data from "../products.json";

function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const FiltrarProductos = Data.filter((item) => {
      return item.category == categoryId || categoryId == undefined;
    });
    setProductos(FiltrarProductos);
  }, [categoryId]);
  return (
    <div
      className="container-fluid d-flex align-center justify-content-center"
      style={{
        background: "white",
        width: "100%",
        padding: "50px",
      }}
    >
      <ItemList products={productos} />
    </div>
  );
}

export default ItemListContainer;
