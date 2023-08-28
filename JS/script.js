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

// slider plugin videos page for red dead
$(".videos-reddead-content").slick({
  arrows: true,
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 3,
  swipe: false,
  prevArrow: $(".videos-reddead .left-arrow"),
  nextArrow: $(".videos-reddead .right-arrow"),
  responsive: [
    {
      breakpoint: 882,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
$(document).ready(function () {
  $(".videos-reddead-content").on("init", function (event, slick) {
    // Get the previous and next arrow buttons
    var prevArrow = $(slick.$prevArrow);
    var nextArrow = $(slick.$nextArrow);

    // Check if there are no previous or next slides
    if (slick.slideCount <= slick.options.slidesToShow) {
      // If there are no previous or next slides
      prevArrow.addClass("slick-disabled");
      nextArrow.addClass("slick-disabled");
    }
  });
});

// slider plugin videos page for gta online
$(".videos-gtaonline-content").slick({
  arrows: true,
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 3,
  swipe: false,
  prevArrow: $(".videos-gtaonline .left-arrow"),
  nextArrow: $(".videos-gtaonline .right-arrow"),
  responsive: [
    {
      breakpoint: 882,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
$(document).ready(function () {
  $(".videos-gtaonline-content").on("init", function (event, slick) {
    // Get the previous and next arrow buttons
    var prevArrow = $(slick.$prevArrow);
    var nextArrow = $(slick.$nextArrow);

    // Check if there are no previous or next slides
    if (slick.slideCount <= slick.options.slidesToShow) {
      // If there are no previous or next slides
      prevArrow.addClass("slick-disabled");
      nextArrow.addClass("slick-disabled");
    }
  });
});
// slider plugin videos page for gta online sessions
$(".videos-session-content").slick({
  arrows: true,
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 3,
  swipe: false,
  prevArrow: $(".videos-session .left-arrow"),
  nextArrow: $(".videos-session .right-arrow"),
  responsive: [
    {
      breakpoint: 882,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
$(document).ready(function () {
  $(".videos-session-content").on("init", function (event, slick) {
    // Get the previous and next arrow buttons
    var prevArrow = $(slick.$prevArrow);
    var nextArrow = $(slick.$nextArrow);

    // Check if there are no previous or next slides
    if (slick.slideCount <= slick.options.slidesToShow) {
      // If there are no previous or next slides
      prevArrow.addClass("slick-disabled");
      nextArrow.addClass("slick-disabled");
    }
  });
});
// slider plugin videos page for games
$(".videos-game-content").slick({
  arrows: true,
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 3,
  swipe: false,
  prevArrow: $(".videos-game .left-arrow"),
  nextArrow: $(".videos-game .right-arrow"),
  responsive: [
    {
      breakpoint: 882,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
$(document).ready(function () {
  $(".videos-game-content").on("init", function (event, slick) {
    // Get the previous and next arrow buttons
    var prevArrow = $(slick.$prevArrow);
    var nextArrow = $(slick.$nextArrow);

    // Check if there are no previous or next slides
    if (slick.slideCount <= slick.options.slidesToShow) {
      // If there are no previous or next slides
      prevArrow.addClass("slick-disabled");
      nextArrow.addClass("slick-disabled");
    }
  });
});

// slider plugin home and videos page
$(".main-carousel").slick({
  arrows: false,
  dots: true,
  autoplay: false,
  customPaging: function () {
    return '<button class="slider-dot"></button>';
  },
  responsive: [
    {
      breakpoint: 882,
      settings: {
        dots: false,
      },
    },
    // Add more breakpoints and settings as needed
  ],
});

// button hover
$(document).ready(() => {
  $(".cell-content button,.download-now").hover(
    () => {
      $(".cell-content button,.download-now").css("background", "#fcaf17");
      $(".cell-content button,.download-now").css("border-color", "#fcaf17");
      $(".cell-content button,.download-now").css("color", "#161616");
    },
    () => {
      $(".cell-content button,.download-now").css("background", "transparent");
      $(".cell-content button,.download-now").css("border-color", "white");
      $(".cell-content button,.download-now").css("color", "white");
    }
  );
});

// sidebar toggle
$(document).ready(() => {
  $(".hamb-bars").click(() => {
    if (
      $("main section,footer,.games-list,.games-search,.downloads").css(
        "opacity"
      ) == 1
    ) {
      $("main section,footer,.games-list,.games-search,.downloads").animate({
        opacity: "0.5",
      });
    } else {
      $("main section,footer,.games-list,.games-search,.downloads").animate({
        opacity: "1",
      });
    }
    $("#sidebar").toggle("slide", () => {
      if ($("#sidebar").css("display") == "block") {
        $("main section,footer,.games-list,.games-search,.downloads").css(
          "pointer-events",
          "none"
        );
      } else {
        $("main section,footer,.games-list,.games-search,.downloads").css(
          "pointer-events",
          "unset"
        );
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
  $(".games-list a div,.featured-games-img").mouseout(function () {
    $(this).css("transform", "translate(0px,0px)");
  });
});

// newswire image hover effect
$(document).ready(() => {
  $(
    ".newswire-img,.reddead-img-content,.gtaonline-img-content,.session-img-content"
  ).css({
    display: "inline-block",
    overflow: "hidden",
  });

  $(
    ".newswire-img img, .reddead-img-content img,.gtaonline-img-content img,.session-img-content img"
  ).css({
    display: "block",
    transition: "transform .5s",
  });

  $(
    ".newswire-img img, .reddead-img-content img,.gtaonline-img-content img,.session-img-content img"
  ).hover(
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

// games autocomplete widget
$(function () {
  var availableTags = [
    "Grand Theft Auto: Mission Pack #1 - London 1969",
    "Grand Theft Auto: Mission Pack #2 - London 1961",
    "Monster Truck Madness 64",
    "Grand Theft Auto 2",
    "Earthworm Jim 3D",
    "Thrasher: Skate and Destroy",
    "Evel Knievel",
    "Grand Theft Auto",
    "Wild Metal",
    "Austin Powers: Oh, Behave!",
    "Austin Powers: Welcome to My Underground Lair!",
    "Midnight Club: Street Racing",
    "Smuggler's Run",
    "Surfing H3O",
    "Oni",
    "Grand Theft Auto III",
    "Smuggler's Run 2: Hostile Territory",
    "Max Payne",
    "State of Emergency",
    "The Italian Job",
    "Smuggler's Run: Warzones",
    "Grand Theft Auto: Vice City",
    "Midnight Club II",
    "Max Payne 2: The Fall of Max Payne",
    "Manhunt",
    "Red Dead Revolver",
    "Grand Theft Auto Advance",
    "Grand Theft Auto: San Andreas",
    "Midnight Club 3: DUB Edition",
    "The Warriors",
    "Grand Theft Auto: Liberty City Stories",
    "Midnight Club 3: DUB Edition Remix",
    "Rockstar Games Presents Table Tennis",
    "Bully",
    "Grand Theft Auto: Vice City Stories",
    "Manhunt 2",
    "Bully: Scholarship Edition",
    "Grand Theft Auto IV",
    "Midnight Club: Los Angeles",
    "Grand Theft Auto IV: The Lost and Damned",
    "Grand Theft Auto: Chinatown Wars",
    "Beaterator",
    "Grand Theft Auto: The Ballad of Gay Tony",
    "Red Dead Redemption",
    "Red Dead Redemption: Undead Nightmare",
    "L.A. Noire",
    "Max Payne 3",
    "Grand Theft Auto: iFruit",
    "Grand Theft Auto V",
    "Grand Theft Auto Online",
    "Bully: Anniversary Edition",
    "L.A. Noire: The VR Case Files",
    "Red Dead Redemption 2",
    "Red Dead Online",
    "Grand Theft Auto: The Trilogy – The Definitive Edition",
  ];
  $(".games-search input").autocomplete({
    source: availableTags,
  });
});

// tooltip widget for games on videos page
$(function () {
  $(".videos-game-content").tooltip({
    track: true,
    classes: {
      "ui-tooltip": "highlight",
    },
  });
});

// download page dropdown
$(document).ready(() => {
  $(".d-pc-mac-games-content-1").click(() => {
    $(".d-pc-mac-games-content-1 .d-pc-mac-games-content-dropdown").toggleClass(
      "myUlStyle",
      1300
    );
    $(".d-pc-mac-games-content-1 .d-pc-mac-games-select-arrow").toggleClass(
      "rotate-180",
      1300
    );
  });
  $(".d-pc-mac-games-content-2").click(() => {
    $(".d-pc-mac-games-content-2 .d-pc-mac-games-content-dropdown").toggleClass(
      "myUlStyle",
      1300
    );
    $(".d-pc-mac-games-content-2 .d-pc-mac-games-select-arrow").toggleClass(
      "rotate-180",
      1300
    );
  });
  $(".d-pc-mac-games-content-3").click(() => {
    $(".d-pc-mac-games-content-3 .d-pc-mac-games-content-dropdown").toggleClass(
      "myUlStyle",
      1300
    );
    $(".d-pc-mac-games-content-3 .d-pc-mac-games-select-arrow").toggleClass(
      "rotate-180",
      1300
    );
  });
  $(".d-pc-mac-games-content-4").click(() => {
    $(".d-pc-mac-games-content-4 .d-pc-mac-games-content-dropdown").toggleClass(
      "myUlStyle",
      1300
    );
    $(".d-pc-mac-games-content-4 .d-pc-mac-games-select-arrow").toggleClass(
      "rotate-180",
      1300
    );
  });
  $(".d-mobile-games-content-1").click(() => {
    $(".d-mobile-games-content-1 .d-mobile-games-content-dropdown").toggleClass(
      "myUlStyle",
      1300
    );
    $(".d-mobile-games-content-1 .d-mobile-games-select-arrow").toggleClass(
      "rotate-180",
      1300
    );
  });
  $(".d-mobile-games-content-2").click(() => {
    $(".d-mobile-games-content-2 .d-mobile-games-content-dropdown").toggleClass(
      "myUlStyle",
      1300
    );
    $(".d-mobile-games-content-2 .d-mobile-games-select-arrow").toggleClass(
      "rotate-180",
      1300
    );
  });
  $(".d-mobile-games-content-3").click(() => {
    $(".d-mobile-games-content-3 .d-mobile-games-content-dropdown").toggleClass(
      "myUlStyle",
      1300
    );
    $(".d-mobile-games-content-3 .d-mobile-games-select-arrow").toggleClass(
      "rotate-180",
      1300
    );
  });
  $(".d-mobile-games-content-4").click(() => {
    $(".d-mobile-games-content-4 .d-mobile-games-content-dropdown").toggleClass(
      "myUlStyle",
      1300
    );
    $(".d-mobile-games-content-4 .d-mobile-games-select-arrow").toggleClass(
      "rotate-180",
      1300
    );
  });
});
