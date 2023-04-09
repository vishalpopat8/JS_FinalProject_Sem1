$(document).ready(() => {
    var prevScrollpos = $(window).scrollTop();
    $(window).scroll(() => {
        var currentScrollPos = $(window).scrollTop();
        if (prevScrollpos > currentScrollPos) {
            $(".header-nav").css("top", "0");
        } else {
            $(".header-nav").css("top", "-50px");
        }
        prevScrollpos = currentScrollPos;
    });
});
