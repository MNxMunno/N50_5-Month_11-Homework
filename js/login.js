const API_URL = "https://fakestoreapi.com/users";
const form = document.querySelector(".form");
const formUsername = document.querySelector(".form__username");
const formPassword = document.querySelector(".form__password");
const errorText = document.querySelector(".red_text");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  let user = {
    username: formUsername.value,
    password: formPassword.value,
  };

  await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res.token);
      localStorage.setItem("token", res.token);
      window.open("/pages/admin.html", "_self");
    })
    .catch((err) => {
      errorText.style.display = "block";
    });
});
