// hiding navbar while scrolling
$(document).ready(() => {
  let prevScrollpos = $(window).scrollTop();
  $(window).scroll(() => {
    var currentScrollPos = $(window).scrollTop();
    if ($("main section,footer").css("opacity") == 1) {
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
      $("main section,footer").animate({ opacity: "0.5" });
    } else {
      $("main section,footer").animate({ opacity: "1" });
    }
    $("#sidebar").toggle("slide");

    $(".hamb-bars div:first-child").animate({ opacity: "toggle" }, 300);
    $(".hamb-bars div:last-child").animate({ opacity: "toggle" }, 300);
  });
});

// sidebar toggle
$(document).ready(() => {
  $(".profile-logo a:first-child").click(() => {
    $("nav").fadeToggle("fast");
  });
});

