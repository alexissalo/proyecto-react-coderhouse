function ItemCount({ stock, onAdd, quantity, modifyQuantity }) {
  const add = () => {
    if (quantity < stock && quantity >= 1) {
      modifyQuantity(quantity + 1);
    }
  };
  const subtract = () => {
    if (quantity > 1) {
      modifyQuantity(quantity - 1);
    }
  };
  return (
    <div>
      <button
        onClick={subtract}
        disabled={quantity === 1}
        className="btn btn-danger"
      >
        -
      </button>
      <label className="fs-3 mx-4">{quantity}</label>
      <button
        onClick={add}
        disabled={quantity === stock}
        className="btn btn-success"
      >
        +
      </button>
      <div className="text-center">
        <button
          onClick={(quantity) => onAdd(quantity)}
          className="btn btn-primary m-2"
          disabled={stock === 0}
        >
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
}

export default ItemCount;
