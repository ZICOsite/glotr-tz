import "../styles/sections/banners.scss";
import "../styles/sections/categories.scss";
import "../styles/sections/products.scss";
import "../styles/sections/extra.scss";
import "../styles/sections/partners.scss";

import Swiper from "swiper";
import { Autoplay } from "swiper/modules";
// import Swiper and modules styles
import "swiper/scss";
import "swiper/scss/navigation";

new Swiper(".banners__swiper", {
  modules: [Autoplay],
  slidesPerView: 1.1,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

new Swiper(".categories__swiper", {
  slidesPerView: "auto",
  spaceBetween: 10,
});
