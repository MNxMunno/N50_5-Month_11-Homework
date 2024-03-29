const wrapper = document.querySelector(".wrapper");
let wishes = JSON.parse(localStorage.getItem("wishes"));
// console.log(wishes);

function createCard(data) {
  while (wrapper.firstChild) {
    wrapper.firstChild.remove();
  }
  let fragment = document.createDocumentFragment();
  data.forEach((product) => {
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <div data-id=${product.id}>
          <div class="card__image" ></div>
          <h2 class="card__title" '>${product.email}</h2>
          <div class="card__fullName">
          <p class="card__desc" title='${product.description}'>${product.name.firstname}</p>
          <p class="card__desc" title='${product.description}'>${product.name.lastname}</p>
        </div>
        <p class="card__desc" title='${product.phone}'>Tel: ${product.phone}</p>

        <button id="card__deslike"  name="product-deslike">Deslike</button>
          <button>Cart</button>
      </div>   
      `;
    fragment.appendChild(card);
  });
  wrapper.appendChild(fragment);
}

createCard(wishes);

const removeWishes = (id) => {
  let filterData = wishes.filter((el) => el.id !== +id);
  localStorage.setItem("wishes", JSON.stringify(filterData));
  createCard(filterData);

  window.location.reload();
};

wrapper.addEventListener("click", (e) => {
  if (e.target.name === "product-deslike") {
    let id = e.target.closest("[data-id]").dataset.id;
    removeWishes(id);
  }
});

//////////////////////////////////////////////////////////////////
const navbarCollection = document.querySelector(".navbar__collection");
const navbarMenu = document.querySelector(".navbar__menu");

navbarMenu.addEventListener("click", () => {
  navbarCollection.classList.toggle("show");
});
