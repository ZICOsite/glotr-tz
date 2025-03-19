const navBurger = document.querySelector(".nav__burger");
const navMenu = document.querySelector(".nav__menu");
const navMenuClose = document.querySelector(".nav__menu-close");
const navMenuLink = document.querySelector(".nav__menu-link.submenu");
const navCategory = document.querySelector(".nav__category");
const navCategoryClose = document.querySelector(".nav__category-close");

const navigationLinkFavorite = document.querySelector(
  ".navigation__link_favorite"
);
const drawer = document.querySelector(".drawer");
const drawerWrapper = document.querySelector(".drawer__wrapper");
const drawerClose = document.querySelector(".drawer__close");

navBurger.addEventListener("click", () => {
  navMenu.classList.add("active");
  body.classList.add("scroll-hidden");
});

navMenuClose.addEventListener("click", () => {
  navMenu.classList.remove("active");
  body.classList.remove("scroll-hidden")
});

navMenuLink.addEventListener("click", (e) => {
  e.preventDefault();
  navCategory.classList.add("active");
});

navCategoryClose.addEventListener("click", () => {
  navCategory.classList.remove("active");
});

navigationLinkFavorite.addEventListener("click", () => {
  drawer.classList.add("active");
  body.classList.add("scroll-hidden");
});

drawer.addEventListener("click", (e) => {
  if (e.target == e.currentTarget) {
    drawer.classList.remove("active");
    body.classList.remove("scroll-hidden");
  }
});

drawerClose.addEventListener("click", () => {
  drawer.classList.remove("active");
  body.classList.remove("scroll-hidden");
})
