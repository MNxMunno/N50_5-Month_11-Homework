const wrapper = document.querySelector(".wrapper");
const loading = document.querySelector(".loading");
const API_URL = "https://fakestoreapi.com/users";

async function fetchData(api) {
  let getData = await fetch(api);
  getData
    .json()
    .then((res) => createCard(res))
    .catch((err) => console.log(err))
    .finally(() => {
      loading.style.display = "none";
    });
}
fetchData(API_URL);

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
        <div name="product-image" class="card__image"></div>
        <h2 class="card__title" title='${product.title}'>Email: ${product.email}</h2>
        <div class="card__fullName">
          <p class="card__desc" title='${product.description}'>${product.name.firstname}</p>
          <p class="card__desc" title='${product.description}'>${product.name.lastname}</p>
        </div>
        <p class="card__desc" title='${product.phone}'>Tel: ${product.phone}</p>
        <button name="product-wish" >Like</button>
        <button>Cart</button>
    </div>   
    `;
    fragment.appendChild(card);
  });
  wrapper.appendChild(fragment);
}

// =============== single route ==============
const singleRoute = (id) => {
  window.open(`/pages/product.html?id=${id}`, "_self");
};

const setWish = async (id) => {
  let getData = await fetch(`${API_URL}/${id}`);
  getData
    .json()
    .then((res) => {
      //   console.log(res);
      let wishes = JSON.parse(localStorage.getItem("wishes")) || [];
      let index = wishes.findIndex((el) => el.id === +id);

      if (index < 0) {
        localStorage.setItem("wishes", JSON.stringify([...wishes, res]));
      }
      console.log(index);
    })
    .catch((err) => {
      console.log(err);
    });
};

wrapper.addEventListener("click", (e) => {
  let { name } = e.target;

  if (name === "product-image") {
    let id = e.target.closest("[data-id]").dataset.id;
    singleRoute(id);
  } else if (name === "product-wish") {
    let id = e.target.closest("[data-id]").dataset.id;
    setWish(id);
  }
});

// ============= Navbar toggle START ================
const navbarCollection = document.querySelector(".navbar__collection");
const navbarMenu = document.querySelector(".navbar__menu");

navbarMenu.addEventListener("click", () => {
  navbarCollection.classList.toggle("show");
});
// ============= Navbar toggle END ================

///////////////////////////////////////////////////

let loadingCard = Array(10).fill("");

let fragment = document.createDocumentFragment();
loadingCard.forEach(() => {
  const card = document.createElement("div");
  card.classList.add("card__loading");
  card.innerHTML = `
  <div class="load__img skeleton"></div>
  <h1 class="skeleton"></h1>
  <p class="skeleton"></p>
  <p class="skeleton"></p>
  <div class="load__btns skeleton">
    <div class="load__btn skeleton"></div>
    <div class="load__btn_two skeleton"></div>
  </div>
    `;
  fragment.appendChild(card);
});
loading.appendChild(fragment);
