;(function ($) {
	$(document).ready(function () {
		var navToggle = document.querySelector(".main-nav__toggle");
		var navWrapper = document.querySelector(".main-nav__wrapper--closed");

		navToggle.addEventListener("click", function (e) {
			e.preventDefault();
			navToggle.classList.toggle("main-nav__toggle--closed");
			navWrapper.classList.toggle("main-nav__wrapper--closed");
		});

		$('.slider').slick({
			arrows: true,
			dots: false,
			responsive: [
				{
					breakpoint: 1010,
					settings: {
						dots: true,
						arrows: false
					}
				}
			]
		});

		$('.prices__slider').slick({
			arrows: false,
			dots: true,
			slidesToShow: 1,
			slidesToScroll: 1
		});

		$(".main-nav__item--contact").on("click","a", function (event) {
			event.preventDefault();
			var id  = $(this).attr('href'),
			top = $(id).offset().top;
			$('body,html').animate({scrollTop: top}, 1500);
		});

		$(".contacts__item").on("click","a", function (event) {
			event.preventDefault();
			var id  = $(this).attr('href'),
				top = $(id).offset().top;
			$('body,html').animate({scrollTop: top}, 1500);
		});

	});
})(jQuery);

var map;
function initMap() {

	var myLatLng = {lat: 48.7247109, lng: 37.532951};

	map = new google.maps.Map(document.getElementById('map'), {
		center: myLatLng,
		zoom: 17,
		disableDefaultUI: true
	});

	var image = 'img/map__marker.png';

	var marker = new google.maps.Marker({
		position: myLatLng,
		map: map,
		title: 'Элчин Хасиев',
		icon: image
	});
}
