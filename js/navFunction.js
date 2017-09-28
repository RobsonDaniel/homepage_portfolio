function animarBtnNav() {
  var btn_nav = document.getElementsByClassName("btn-nav")[0];
  btn_nav.classList.toggle("animarBtnNav");
}

function nav() {
  var nav = document.getElementById("nav");

  if (nav.style.width == "60%") {
    nav.style.width = "0%";
  }else {
    nav.style.width = "60%";
  }

  animarBtnNav();
}

var item_nav = document.querySelectorAll("#nav a");

for (var i = 0; i < item_nav.length; i++) {
  item_nav[i].onclick = function () { nav(); };
}
