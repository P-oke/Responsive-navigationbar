const tog = document.getElementsByClassName("togglebar")[0];
const links = document.getElementsByTagName("nav")[0];
tog.addEventListener("click", () => {
  links.classList.toggle("active");
});
//hello
