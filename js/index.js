document.addEventListener("DOMContentLoaded", () => {
	window.addEventListener("scroll", () => {
		if (window.scrollY > 0) {
			document.querySelector("header").classList.add("header-fly");
		} else {
			document.querySelector("header").classList.remove("header-fly");
		}
	});

	document
		.querySelector(".header-mobile__burger")
		.addEventListener("click", () => {
			const headerMobile = document.querySelector(".header-mobile");
			if (headerMobile.classList.contains("active")) {
				headerMobile.classList.remove("active");
			} else {
				headerMobile.classList.add("active");
			}
		});

	new Swiper(".swiper-partners", {
		slidesPerView: "auto",
		spaceBetween: 10,
		loop: true,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});
});
