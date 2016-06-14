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


// Mini slider

var currentClickedElement = 0;

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

//fancybox

$(document).ready(function() {
    $(".fancybox-button").fancybox({
        prevEffect: 'none',
        nextEffect: 'none',
        closeBtn: false,
        helpers: {
            title: {
                type: 'inside'
            },
            buttons: {}
        }
    });

});

// Gallery filter
$(document).ready(function() {

    var galleryButtons = $(".portfolio_buttons");
    var galleryImages = $(".images").find("a");

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
});

// Watch more button
$(function() {
    var watchMoreBtn = $(".portfolio_watch_button");
    var hiddenImages = $(".images-hidden");

    watchMoreBtn.on("click", function() {

        event.preventDefault();
        hiddenImages.toggle();

    });
});


//Form check
$(function() {

    var sendButton = $("#contact_btn");

    sendButton.on("click", function() {
        $(".error").remove();
        event.preventDefault();

        var name = $("#name");
        var email = $("#email");
        var message = $("#comment");
        var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;

        var nameGetInfo = name.val();
        var emailGetInfo = email.val();
        var messageGetInfo = message.val();

        if (nameGetInfo.length < 5) {
            var newElement = $("<div class='error'>Imię powinno być dłuższe niż 5 znaków</div>");
            newElement.insertAfter(name);
        }

        if (testEmail.test(emailGetInfo) === false) {
            var newElement2 = $("<div class='error'>Nieprawidłowy adres e-mail</div>");
            newElement2.insertAfter(email);
        }

        if (messageGetInfo.length < 10) {
            var newElement3 = $("<div class='error'>Wiadomość powinna być dłuższa niż 10 znaków</div>");
            newElement3.insertAfter(message);
        }

    });
});
