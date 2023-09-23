const menuBtn = document.querySelector(".menu__btn");
const menuMobile = document.querySelector(".header__menu-list");

menuBtn.addEventListener("click", () => {
	menuMobile.classList.toggle("menu--open");
});

const swiperOne = new Swiper(".reviews__slider", {
	loop: true,
	pagination: {
		el: ".swiper-pagination",
	},
});

const swiperTwo = new Swiper(".quality__slider", {
	loop: true,
	slidesPerView: 1,
	spaceBetween: 20,
	pagination: {
		el: ".swiper-pagination",
	},
	breakpoints: {
		361: {
			slidesPerView: 2,
		},
		481: {
			slidesPerView: 3,
		},
	},
});

const accordeon = document.querySelector(".accordeon");
const accordeonTitles = accordeon.querySelectorAll(".accordeon__title");

accordeonTitles.forEach.call(accordeonTitles, function (title) {
	title.addEventListener("click", function () {
		const currentText = title.parentElement.querySelector(".accordeon__text");

		title.classList.toggle("accordeon__title--active");
		currentText.classList.toggle("accordeon__text--visible");

		if (currentText.classList.contains("accordeon__text--visible")) {
			currentText.style.maxHeight = currentText.scrollHeight + "px";
		} else {
			currentText.style.maxHeight = null;
		}
	});
});
