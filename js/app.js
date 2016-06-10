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
//

//ProgressBars

// nie dziala :(

// $(function() {
//     $(".progress_bar").each(function() {
//         $this = $(this);
//         var $progressBarTitle = $this.prev().find("h4");
//         console.log($progressBarTitle);
//         var $bar = $this;
//         var percent = $bar[0].value;
//
//         $progressBarTitle.text("0%");
//         $bar.attr("value:0");
//
//         $this.on("inview", function() {
//             $bar.animate({
//                 width: percent
//             }, {
//                 duration: 1500,
//                 step: function(now) {
//                     $progressBarTitle.text(Math.round(now) + "%");
//                 }
//             });
//         });
//     });
// });
 });
//Animated Number counter

// $(window).on("scroll", function(){
// $('.count').each(function () {
//
//     $(this).prop('Counter',0).animate({
//         Counter: $(this).text()
//     }, {
//         duration: 4000,
//         easing: 'swing',
//         step: function (now) {
//             $(this).text(Math.ceil(now));
//         }
//     });
// });
// });

// $(window).on("scroll", function(){
// $(".counter").each(function() {
//   console.log("dziala");
//   $this = $(this);
//   var $number = $this.find("h1");
//   var value = $number.text();
//   $number.text("0");
//   $this.one("inview", function() {
//     $({
//       count: 0
//     }).animate({
//       count: value
//     }, {
//       duration: 1500,
//       step: function(now) {
//         if (value.slice(-1) == "%") {
//           $number.text(Math.round(now) + "%");
//         } else {
//           $number.text(Math.round(now));
//         }
//       }
//     });
//   });
// });
//   });

// Mini slider

var currentClickedElement = 0;

// $(window).on("resize", function() {
$(function() {
    miniSlider();
});
miniSlider();

function miniSlider() {
    var sliderBtns = $(".minislider_btns").find("span");
    var pictures = $(".minislider").find("li");
    var currentPicture = 0;
    var imgWidth = pictures.eq(currentPicture).width();
    var picList = $('.minislider').find("ul");

    picList.width(imgWidth * pictures.length);
    picList.css("left", -(currentClickedElement * imgWidth));
    sliderBtns.off('click').on("click", function() {

        var currIndex = $(this).index();
        currentClickedElement = currIndex;

        sliderBtns.removeClass("active_minislider_btn");
        $(this).toggleClass("active_minislider_btn");

        picList.animate({
            left: -($(this).index() * imgWidth)
        }, 1000);

    });
}




// Gallery filter
$(function() {
    var galleryButtons = $(".portfolio_buttons");
    var galleryImages = $(".img_descr_item").find("img");


    galleryButtons.on("click", function() {
        var galleryBtnTag = $(this).data("tag");
        event.preventDefault();
        if ($(this).index() === 0) {
            galleryImages.removeClass("hide");
        } else {
            galleryImages.each(function() {
                var imgTag = $(this).data("tag");

                if (imgTag.indexOf(galleryBtnTag) == -1) {
                    $(this).addClass("hide");
                } else {
                    $(this).removeClass("hide");

                }
            });
        }
    });
    var watchMoreBtn = $(".portfolio_watch_button");
    var hiddenImages = $(".images-hidden");

    watchMoreBtn.on("click", function() {
        console.log("dziala");
        event.preventDefault();
        hiddenImages.toggle();

    });
});
