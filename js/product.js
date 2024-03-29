const API_URL = "https://fakestoreapi.com/users";
const productSingle = document.querySelector(".product__single");
const notFound = document.querySelector(".not__found");
const loading = document.querySelector(".loading");

async function fetchData(api) {
  let path = new URLSearchParams(window.location.search);
  let id = path.get("id");

  let getData = await fetch(`${api}/${id}`);
  getData
    .json()
    .then((res) => createSingle(res))
    .catch((err) => {
      notFound.style.display = "block";
      console.log(err);
    })
    .finally(() => {
      loading.style.display = "none";
    });
}

fetchData(API_URL);

function createSingle(data) {
  productSingle.innerHTML = `
  <div class="product__image">
    <img src="${data.image}" alt="" /> 
  </div>
  <div class="product__content">
    <h1>${data.title}</h1>
    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
    <p>
        ${data.description}
    </p>
  </div>
    `;
}
