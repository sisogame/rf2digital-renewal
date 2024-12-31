(function () {
	emailjs.init("gmuoPzoC69dYngEW1"),
		document
			.querySelector("#contactForm")
			?.addEventListener("submit", function (t) {
				t.preventDefault();
				let o = {
					company: document.querySelector("#company").value,
					name: document.querySelector("#name").value,
					phone: document.querySelector("#phone").value,
					email: document.querySelector("#email").value,
					message: document.querySelector("#message").value,
				};
				emailjs.send("test44444", "template_uh7y9se", o).then(
					function (e) {
						console.log("Success", e.status, e.text),
							alert("Your email request has been sent!");
					},
					function (e) {
						console.error("Failed", e);
					}
				);
			}),
		setTimeout(function () {
			const t = document.querySelector(".com-popup-wrap .close"),
				o = document.querySelector("body");
			t.addEventListener("click", function (e) {
				e.preventDefault(),
					this.closest(".com-popup-wrap").classList.remove("on"),
					o.classList.remove("on");
			});
		}, 10);
})();
