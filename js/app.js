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

// $(document).ready(function(){
// console.log("dziala");
// var portfolioMenu = $(".images img");
//
// portfolioMenu.on('click', function(){
//   console.log("click dziala");
//     var data = $(this).data("tag");
//     $(".images .showPic:visible").hide();
//     $(".images .showPic."+ data).show();
//     event.preventDefault();
// });
// });






document.addEventListener("DOMContentLoaded", function() {
            // var images = document.querySelectorAll(".images img"); // tablica
            // var showButton = document.getElementById("showButton");
            // var hideButton = document.getElementById("hideButton");
            // // var input = document.getElementById("tagInput");
            //
            //
            // showButton.addEventListener("click", function(event) { // eventy na klikniecie
            //         // var tagInput = input.value;
            //         for (i = 0; i < images.length; i++) { // wypisuje wszystkie tagi dla obrazkow
            //             var tag = images[i].dataset.tag;
            //             if (tag.indexOf(tagInput) != -1) {
            //                 images[i].classList.remove("invisible");
            //             }
            //           }
            //
            //             tagInput = ""; // czysci tekst w inpucie
            //         });
            //
            //
            //
            //     hideButton.addEventListener("click", function(event) {
            //         var tagInput = input.value;
            //         for (i = 0; i < images.length; i++) {
            //             var tag = images[i].dataset.tag;
            //             if (tag.indexOf(tagInput) != -1) {
            //                 images[i].classList.add("invisible");
            //             }
            //
            //         }
            //
            //         tagInput = "";
            //     });
            //         });



$(function() {


  jQuery(function ($) {
      // fancybox
      $(".fancybox").fancybox({
          modal: true, // disable regular nav and close buttons
          // add buttons helper (requires buttons helper js and css files)
          helpers: {
              buttons: {}
          }
      });
      // filter selector
      $(".portfolio_buttons").on("click", function () {
          var $this = $(this);
          // if we click the active tab, do nothing
          if ( !$this.hasClass("active") ) {
              $(".filter").removeClass("active");
              $this.addClass("active"); // set the active tab
              // get the data-rel value from selected tab and set as filter
              var $filter = $this.data("rel");
              // if we select view all, return to initial settings and show all
              $filter == 'all' ?
                  $(".fancybox")
                  .attr("data-fancybox-group", "gallery")
                  .not(":visible")
                  .fadeIn()
              : // otherwise
                  $(".fancybox")
                  .fadeOut(0)
                  .filter(function () {
                      // set data-filter value as the data-rel value of selected tab
                      return $(this).data("filter") == $filter;
                  })
                  // set data-fancybox-group and show filtered elements
                  .attr("data-fancybox-group", $filter)
                  .fadeIn(1000);
          } // if
      }); // on
  }); // ready


    var watchMoreBtn = $(".portfolio_watch_button");
    var hiddenImages = $(".images-hidden");

    watchMoreBtn.on("click", function() {
        event.preventDefault();
        hiddenImages.toggle();

    });
});
});
