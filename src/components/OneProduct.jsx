import { BsPlusLg, BsDashLg } from "react-icons/bs";

function OneProduct({ product, onAdd, onRemove }) {
  const stil = {
    margin: 1 + "em",
    border: "solid 3px black",
  };

  function openForm(e) {
    let ne = document.createElement("p");

    let glavni = e.target.previousElementSibling;
    glavni.appendChild(ne);
    ne.innerHTML = `<div class="new-element">
                    <hr>
                        <h5 class="col-md-2 col-lg-6 col-xl-4 text-left"><b>Category:</b> ${product.category}</h5>
                        <h5 class="col-md-2 col-lg-6 col-xl-2 text-left"><b>Features:</b> ${product.features}</h5>
                        <p class="col-md-2 col-lg-6 col-xl-8 text-left"}><b>Description:</b> ${product.description}</p>
                    </div>`;

    e.target.setAttribute("disabled", "true");
    let of = e.target.nextElementSibling;
    of.removeAttribute("disabled");
  }

  function closeForm(e) {
    let ne = document.querySelector(".new-element");
    if (e.target.disabled != "true" && ne != null) {
      ne.remove();
      let glavni = e.target.previousElementSibling;
      glavni.removeAttribute("disabled");
      e.target.setAttribute("disabled", "true");
    }
  }

  return (
    <div className="card" style={stil}>
      <img
        className="card-img-top"
        src="https://picsum.photos/640/360"
        alt="Slika"
      />
      <div className="card-body">
        <h3 className="card-title">{product.name}</h3>
        <h4 className="card-category">{product.category}</h4>
        <h4 className="price">{product.price}</h4>
      </div>

      <div>
        <button
          className="btn btn-success"
          style={{ width: "50px" }}
          onClick={() => onAdd(product.name)}
        >
          <BsPlusLg />
        </button>
        <button
          className="btn btn-danger"
          style={{ width: "50px" }}
          onClick={() => onRemove(product.name)}
        >
          <BsDashLg />
        </button>
        <div className="details" style={{}}></div>
        <button
          className="open-button btn btn-primary"
          style={{ marginTop: 20 + "px", marginBottom: 20 + "px" }}
          onClick={openForm}
        >
          Details
        </button>
        <button
          className="close-button btn btn-secondary"
          style={{
            marginLeft: 20 + "px",
            marginTop: 20 + "px",
            marginBottom: 20 + "px",
          }}
          onClick={closeForm}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default OneProduct;
