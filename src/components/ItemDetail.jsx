function ItemDetail({ name, price, img, description }) {
  return (
    <div class="container mb-5">
      <div class="row d-flex flex-row">
        <div class="col-md-5 product-image">
          <img class="img-fluid" src={img} alt="" />
        </div>
        <div class="col-md-7">
          <h2 class="fs-3" style={{ textTransform: "uppercase" }}>
            {name}
          </h2>
          <h5 class="text-secondary fs-6 fw-bold">${price}</h5>
          <div class="text-secondary text-small">Talle :aa</div>
          <div class="my-2">
            <div
              class="btn-group"
              role="group"
              aria-label="Basic radio toggle button group"
            >
              <input
                type="radio"
                class="btn-check"
                name="size"
                id="btnradio4"
                autocomplete="off"
                checked
              />
              <label class="btn btn-outline-dark" for="btnradio4">
                S
              </label>

              <input
                type="radio"
                class="btn-check"
                name="size"
                id="btnradio5"
                autocomplete="off"
              />
              <label class="btn btn-outline-dark" for="btnradio5">
                M
              </label>

              <input
                type="radio"
                class="btn-check"
                name="size"
                id="btnradio6"
                autocomplete="off"
              />
              <label class="btn btn-outline-dark" for="btnradio6">
                L
              </label>
            </div>
          </div>

          <button class="btn btn-dark w-100 my-5" onclick="showToast()">
            <i class="bi bi-cart-plus-fill"></i>
            Añadir al Carrito
          </button>
          <div>
            <span class="text-secondary text-small">Detalles :</span>

            <div class="accordion accordion-flush" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button
                    class="accordion-button"
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
                  class="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">{description}</div>
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
