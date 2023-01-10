import Item from "./Item";

function ItemList({ products, section }) {
  return (
    <div
      className="row row-cols-1 row-cols-md-3 g-4"
      style={{ background: "white" }}
    >
      {products.map((item) => (
        <Item
          name={item.name}
          price={item.price}
          img={item.img}
          id={item.id}
          section={section}
        />
      ))}
    </div>
  );
}

export default ItemList;
