import "./ComContactPopup.astro_astro_type_script_index_0_lang.1c6c9f54.js";
document
  .querySelector(".mobile-sub-menu")
  .addEventListener("change", function (t) {
    var o = this.value,
      e = document.querySelector(o);
    if (e) {
      var n = e.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: n - 150, behavior: "smooth" });
    }
  });
/iPad|iPhone|iPod/.test(navigator.userAgent) &&
  !window.MSStream &&
  document
    .querySelector(".mobile-sub-menu")
    .addEventListener("touchend", function (t) {
      setTimeout(() => {
        this.blur();
      }, 0);
    });
