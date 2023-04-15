// hiding navbar while scrolling
$(document).ready(() => {
	let prevScrollpos = $(window).scrollTop();
	$(window).scroll(() => {
		var currentScrollPos = $(window).scrollTop();
		if (
			$("main section,footer").css("opacity") == 1 &&
			$("nav").css("display") == "none"
		) {
			if (prevScrollpos > currentScrollPos) {
				$(".header-nav").css("top", "0");
			} else {
				$(".header-nav").css("top", "-80px");
			}
		}
		prevScrollpos = currentScrollPos;
	});
});

// slider plugin
$(".main-carousel").slick({
	arrows: false,
	dots: true,
	customPaging: function (slider, i) {
		return '<button class="slider-dot"></button>';
	},
});

// button hover
$(document).ready(() => {
	$(".cell-content button").hover(
		() => {
			$(".cell-content button").css("background", "#fcaf17");
			$(".cell-content button").css("border-color", "#fcaf17");
			$(".cell-content button").css("color", "#161616");
		},
		() => {
			$(".cell-content button").css("background", "transparent");
			$(".cell-content button").css("border-color", "white");
			$(".cell-content button").css("color", "white");
		}
	);
});

// sidebar toggle
$(document).ready(() => {
	$(".hamb-bars").click(() => {
		if ($("main section,footer").css("opacity") == 1) {
			$("main section,footer,.games-list").animate({ opacity: "0.5" });
		} else {
			$("main section,footer,.games-list").animate({ opacity: "1" });
		}
		$("#sidebar").toggle("slide", () => {
			if ($("#sidebar").css("display") == "block") {
				$("main section,footer,.games-list").css("pointer-events", "none");
			} else {
				$("main section,footer,.games-list").css("pointer-events", "unset");
			}
		});

		$(".hamb-bars div:first-child").animate({ opacity: "toggle" }, 300);
		$(".hamb-bars div:last-child").animate({ opacity: "toggle" }, 300);
	});

});

// current page link css
$(document).ready(() => {
	$(".side-content")
		.find("a")
		.each(function () {
			let currentPage = $(this).attr("href");
			if (currentPage == location.pathname.split("/").slice(-1)[0]) {
				$(this).css("color", "#fcaf17");
			}
		});
});

// profile toggle
$(document).ready(() => {
	$(".profile-logo a:first-child").click(() => {
		$("nav").fadeToggle("fast");
	});
});

// games image hover
$(document).ready(() => {
	$(".games-list a div,.featured-games-img").mousemove(function (event) {
		//Both the x and y value are calculated by taking the mouse x,y position on the page and subtracting it from the x,y position of the image on the page.
		var mousex = event.pageX - $(this).offset().left;
		var mousey = event.pageY - $(this).offset().top;

		//The 40 controls the amount of movement that will happen by giving us a smaller number.
		var imgx = (mousex - 300) / 40;
		var imgy = (mousey - 200) / 40;

		//Adds a translation css styles to the image element
		$(this).css("transform", "translate(" + imgx + "px," + imgy + "px)");
	});

	//This function will fire every time the user mouses off of the image. It resets the translation back to 0.
	$(".games-list a div").mouseout(function () {
		$(this).css("transform", "translate(0px,0px)");
	});
});

// newswire image hover effect
$(document).ready(() => {
	$(".newswire-img").css({
		display: "inline-block",
		overflow: "hidden",
	});

	$(".newswire-img img").css({
		display: "block",
		transition: "transform .5s",
	});

	$(".newswire-img img").hover(
		function () {
			$(this).css({
				transform: "scale(1.03)",
				"transform-origin": "50% 50%",
			});
		},
		function () {
			$(this).css({
				transform: "none",
				"transform-origin": "50% 50%",
			});
		}
	);
});
