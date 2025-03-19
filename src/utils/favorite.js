document.addEventListener("DOMContentLoaded", () => {
  const productsContainer = document.querySelector(".products__cards");
  const favoritesContainer = document.getElementById("favorites");
  const favCount = document.getElementById("fav-count");
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  function updateFavoritesUI() {
    productsContainer.querySelectorAll(".fav-btn").forEach((btn) => {
      const productId = btn.closest(".products__card").dataset.id;

      btn.classList.toggle("active", favorites.includes(productId));
    });
    renderFavorites();
    favCount.textContent = favorites.length;
    
    if (favorites.length) {
      favCount.classList.add("active");
    } else {
      favCount.classList.remove("active");
    }
  }

  function renderFavorites() {
    favoritesContainer.innerHTML = "";
    favorites.forEach((id) => {
      const product = document.querySelector(
        `.products__card[data-id="${id}"]`
      );
      if (product) {
        const clone = product.cloneNode(true);
        const favBtn = clone.querySelector(".fav-btn");
        favBtn.addEventListener("click", () => toggleFavorite(id));
        favoritesContainer.appendChild(clone);
      }
    });
  }

  function toggleFavorite(productId) {
    const index = favorites.indexOf(productId);
    if (index === -1) {
      favorites.push(productId);
    } else {
      favorites.splice(index, 1);
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
    updateFavoritesUI();
  }

  productsContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("fav-btn")) {
      console.log(e.target);
      const productId = e.target.closest(".products__card").dataset.id;
      toggleFavorite(productId);
    }
  });

  updateFavoritesUI();
});
