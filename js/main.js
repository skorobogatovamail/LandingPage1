(function () {
  const header = document.querySelector(".header");

  window.onscroll = () => {
    if (window.scrollY > 150) {
      header.classList.add("header_active");
    } else {
      header.classList.remove("header_active");
    }
  };

  const headerBurger = document.querySelector(".header__burger");
  const headerNav = document.querySelector(".header__nav");
  const headerNavClose = document.querySelector(".header__nav-close");

  headerBurger.addEventListener("click", () => {
    console.log('clicked headerBurger');
    headerNav.classList.add("header__nav-active");
  });

  headerNavClose.addEventListener("click", () => {
    console.log('clicked headerNavClose');
    headerNav.classList.remove("header__nav-active");
  });
})();
