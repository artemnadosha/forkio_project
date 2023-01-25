const burgerBtn = document.querySelector(".burger-button");
const burgerList = document.querySelector(".burger-list");

burgerBtn.addEventListener("click", () => {
  burgerBtn.classList.toggle("active");
  burgerList.classList.toggle("active");
});

document.body.addEventListener('click', (e) => {
  if (burgerBtn.classList.contains('active') && e.target.closest('div') !== burgerBtn) {

    if (!e.target.closest('ul')){
      burgerBtn.classList.toggle("active");
      burgerList.classList.toggle("active");
    };
  };
});