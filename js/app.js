// Hamburger menu
$(document).ready(function() {
    $("#hmb_menu").click(function() {
        $(this).toggleClass('open');
    });

// Hamburger menu- rozwijana lista
    $(function() {
        var menuVisible = false;
        $('#hmb_menu').click(function() {
            if (menuVisible) {
                $('.nav-collapse').css({
                    'display': 'none'
                });
                menuVisible = false;
                return;
            }
            $('.nav-collapse').css({
                'display': 'block'
            });
            menuVisible = true;
        });
    });
});

//Sticky menu
$(window).on("scroll", function() {
    // console.log('działa');

    var topWindow = $(window).scrollTop();
    var topDiv = $("#sticky-div").offset().top;

    if (topWindow > topDiv) {
        $("#sticky").addClass("positionTop");
    } else {
        $("#sticky").removeClass("positionTop");
    }
});

//Slider
$(function() {
var prevButton = $("#prevPicture");
var nextButton = $("#nextPicture");
var pictures = $(".slider");
var listOfPic = pictures.find("ul");
var members = pictures.find("li");
var currentPicture = 0;
var imageWidth = members.eq(currentPicture).width();

listOfPic.width(imageWidth * members.length);

nextButton.on("click", function() {
    if (currentPicture < (members.length - 1) && (members.last().offset().left - (pictures.offset().left + pictures.width() - imageWidth)) !== 0) {
        currentPicture++;
        listOfPic.animate({
            left: "-=" + imageWidth
        }, 1000);
    }
});

prevButton.on("click", function() {
    if (currentPicture > 0 && currentPicture < (members.length)) {
        currentPicture--;
        listOfPic.animate({
            left: "+=" + imageWidth
        }, 1000);
    }
});
});
