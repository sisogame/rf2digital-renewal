import "./ComContactPopup.astro_astro_type_script_index_0_lang.1c6c9f54.js";
const o = document.querySelector("#main");
o &&
  document.querySelector(".menu-toggle").addEventListener("click", function () {
    const e = document.querySelector(".logo"),
      t = document.querySelector(".header .bg");
    e?.classList.toggle("on"),
      e.classList.contains("on")
        ? (e.querySelector("img").setAttribute("src", "../img/logo-sub.png"),
          t.classList.add("on"))
        : (e.querySelector("img").setAttribute("src", "../img/logo.png"),
          t.classList.remove("on")),
      setTimeout(function () {
        document.querySelector(".mobile-menu").classList.toggle("active"),
          document.querySelector(".menu-toggle").classList.toggle("active");
      }, 30);
  });
