import Item from "./Item";

function ItemList({ products }) {
  return (
    <div
      className="row row-cols-1 row-cols-md-3 g-4"
      style={{ background: "white" }}
    >
      {products.map((item) => (
        <Item name={item.name} price={item.price} img={item.img} />
      ))}
    </div>
  );
}

export default ItemList;
