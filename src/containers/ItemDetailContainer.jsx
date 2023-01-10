import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../components/ItemDetail";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import Loader from "../components/Loader";

function ItemDetailContainer() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const queryDoc = doc(db, "productos", itemId);
    getDoc(queryDoc)
      .then((res) => setProductos({ id: res.id, ...res.data() }))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [itemId]);
  return (
    <div
      className="d-flex align-center justify-content-center"
      style={{ padding: "50px" }}
    >
      {loading ? <Loader /> : <ItemDetail products={productos} />}
    </div>
  );
}

export default ItemDetailContainer;
