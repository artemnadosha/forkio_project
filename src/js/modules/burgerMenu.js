const burgerBtn = document.querySelector(".burger-button");
const burgerList = document.querySelector(".burger-list");

burgerBtn.addEventListener("click", () => {
  burgerBtn.classList.toggle("active");
  burgerList.classList.toggle("active");
});
