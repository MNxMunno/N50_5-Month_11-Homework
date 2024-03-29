let isLogin = localStorage.getItem("token");

function checkLogin() {
  if (!isLogin) {
    window.location.replace("/pages/login.html");
  }
}

checkLogin();
