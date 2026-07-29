const menuButton = document.querySelector(".mobile-menu-button");
const navigation = document.querySelector("#primary-navigation");
const inquiryForm = document.querySelector(".inquiry-form");
const formMessage = document.querySelector(".form-message");

menuButton.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

inquiryForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formMessage.textContent = "已收到你的詢問，我們會盡快回覆。";
});
