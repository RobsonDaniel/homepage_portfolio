var photo = document.querySelectorAll(".skill p")[0].style.width = "95%",
    wd = document.querySelectorAll(".skill p")[1].style.width = "85%",
    ps = document.querySelectorAll(".skill p")[2].style.width = "80%";

var about = document.querySelector(".about"),
    skills = document.querySelector(".skills");

window.onscroll = function () {
  var janela = document.body.scrollTop || document.documentElement.scrollTop;

  if (janela >= about.offsetTop) { skills.classList.add("animarSkills"); }
};
