import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../components/ItemList";
import Loader from "../components/Loader";
import {
  collection,
  query,
  where,
  getDocs,
  getFirestore,
} from "firebase/firestore";

function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const productRef = collection(db, "productos");
    const queryFilter = categoryId
      ? query(productRef, where("category", "==", categoryId))
      : productRef;
    getDocs(queryFilter)
      .then((response) => {
        setProductos(
          response.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
        );
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
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
      {loading ? <Loader /> : <ItemList products={productos} />}
    </div>
  );
}

export default ItemListContainer;
