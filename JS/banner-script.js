$(document).ready(function() {
    $("#banner-slide").bjqs({
        animtype: "slide",
        animspeed: 5000,
        height: 198,
//        hoverpause: false,
        nexttext: '>',
        prevtext: '<',
        responsive: true,
        randomstart: true,
        usecaptions: false,
        width: 1000
    });
});