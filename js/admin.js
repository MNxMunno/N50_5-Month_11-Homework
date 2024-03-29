let isLogin = localStorage.getItem("token");

function checkLogin() {
  if (!isLogin) {
    window.location.replace("/pages/login.html");
  }
}

checkLogin();

//////////////////////////////////////////////////

const navbarCollection = document.querySelector(".navbar__collection");
const navbarMenu = document.querySelector(".navbar__menu");

navbarMenu.addEventListener("click", () => {
  navbarCollection.classList.toggle("show");
});
