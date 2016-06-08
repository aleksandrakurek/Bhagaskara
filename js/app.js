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
        // $('.nav-collapse').click(function() {
        //   $(this).css({'display':'none'});
        //   menuVisible = false;
        //
        // });
    });
});

//sticky menu
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


// Team members slider
$(function() {
var prevMemberBtn = $("#prevPicture");
var nextMemberBtn = $("#nextPicture");
var teamMembersSlider = $(".slider");
var membersList = teamMembersSlider.find("ul");
var members = teamMembersSlider.find("li");
var currentPicture = 0;
var imageWidth = members.eq(currentPicture).width();
console.log(imageWidth);

membersList.width(imageWidth * members.length);

nextMemberBtn.on("click", function() {
console.log("click na next");
    if (currentPicture < (members.length - 1) && (members.last().offset().left - (teamMembersSlider.offset().left + teamMembersSlider.width() - imageWidth)) !== 0) {
        currentPicture++;
        membersList.animate({
            left: "-=" + imageWidth
        }, 1000);
    }
});

prevMemberBtn.on("click", function() {
console.log("click na prev");
    if (currentPicture > 0 && currentPicture < (members.length)) {
        currentPicture--;
        membersList.animate({
            left: "+=" + imageWidth
        }, 1000);
    }
});
});






// $(document).ready(function() {
//   // $(function() {
// $('.carousel').carousel({
//   interval: 4000
// });
//
// $('.carousel .item').each(function(){
//   var next = $(this).next();
//   if (!next.length) {
//     next = $(this).siblings(':first');
//   }
//   next.children(':first-child').clone().appendTo($(this));
//
//   for (var i=0;i<2;i++) {
//     next=next.next();
//     if (!next.length) {
//     	next = $(this).siblings(':first');
//   	}
//
//     next.children(':first-child').clone().appendTo($(this));
//   }
// });
//   // });
//   });

// document.addEventListener("DOMContentLoaded", function() {
//
//     var prevButton = document.getElementById("prevPicture");
//     var nextButton = document.getElementById("nextPicture");
//     var pictures = document.querySelectorAll(".slider li");
//
//     var listOfPic = document.querySelectorAll("ul"); // potrzebuje tego zeby szukac dzieci- czyli el li
//
//     var prevcurrentVisiblePicture = 0;
//     var currentVisiblePicture = 1; // na poczatku bedzie widoczny zerowy obrazek
//     var nextcurrentVisiblePicture = 2;
//
//     console.log("listOfPic " + listOfPic);
//     //
//     // var lastElementToClone = listOfPic.lastElementChild;
//     // var firstElementToClone = listOfPic.firstElementChild;
//
//     // var secPic = pictures[1]; // to jest obrazek nr 2
//     // var beforeLastPic = pictures[pictures.length - 1]; // to jest obrazek nr 4
//
//
//     var toCloneLast = pictures[1]; // to jest obrazek nr 2
//     var toCloneFirst = pictures[pictures.length - 1]; // to jest obrazek nr 4
//
//     console.log(toCloneLast);
//     console.log(toCloneFirst);
//
//     // var firstElementToClone = toCloneLast.cloneNodle(); // to jest ostatni obrazek ktory chce klonowac jako pierwszy"
//     // var lastElementToClone = toCloneFirst.cloneNodle(); // to jest pierwszy obrazek ktory chce klonowac jako ostatni"
//     //
//     // console.log(lastElementToClone);
//     // console.log(firstElementToClone);
//
//
//     // var lastElementToClone = listOfPic.lastElementChild;
//     // var firstElementToClone = listOfPic.firstElementChild;
//
//
//
//
//     // console.log(prevButton);
//     // console.log(nextButton);
//     // console.log(pictures);
//
//
//     pictures[prevcurrentVisiblePicture].classList.add("visible");
//     pictures[currentVisiblePicture].classList.add("visible");
//     pictures[nextcurrentVisiblePicture].classList.add("visible");
//
//
//     // prevButton.addEventListener("click", function(event) {
//     //     console.log("Click in prev button");
//     //     pictures[prevcurrentVisiblePicture].classList.remove("visible");
//     //     currentVisiblePicture--;
//     //     pictures[currentVisiblePicture].classList.remove("visible");
//     //     currentVisiblePicture--;
//     //     pictures[nextcurrentVisiblePicture].classList.remove("visible");
//     //     currentVisiblePicture--;
//     //
//     //     if (currentVisiblePicture < 0) {
//     //         prevcurrentVisiblePicture = pictures.length-1;
//     //         currentVisiblePicture = pictures.length - 1;
//     //         nextcurrentVisiblePicture = pictures.length - 1;
//     //     }
//     //
//     //     pictures[prevcurrentVisiblePicture].classList.add("visible");
//     //     pictures[currentVisiblePicture].classList.add("visible");
//     //     pictures[nextcurrentVisiblePicture].classList.add("visible");
//     //
//     // });
//
//     nextButton.addEventListener("click", function(event) {
//         console.log("Click in next button");
//
//
//
//         pictures[prevcurrentVisiblePicture].classList.remove("visible");
//         prevcurrentVisiblePicture++;
//         pictures[currentVisiblePicture].classList.remove("visible");
//         currentVisiblePicture++;
//         pictures[nextcurrentVisiblePicture].classList.remove("visible");
//         nextcurrentVisiblePicture++;
//
//         if (currentVisiblePicture > (pictures.length - 1) &&
//             prevcurrentVisiblePicture > (pictures.length - 1) &&
//             nextcurrentVisiblePicture > (pictures.length - 1)) {
//
//
//             prevcurrentVisiblePicture = pictures[prevcurrentVisiblePicture];
//             currentVisiblePicture = pictures[currentVisiblePicture];
//             nextcurrentVisiblePicture = pictures[nextcurrentVisiblePicture];
//         }
//
//
//         pictures[prevcurrentVisiblePicture].classList.add("visible");
//         pictures[currentVisiblePicture].classList.add("visible");
//         pictures[nextcurrentVisiblePicture].classList.add("visible");
//     });
//
//     // pictures[prevcurrentVisiblePicture].classList.add("visible");
//     // pictures[currentVisiblePicture].classList.add("visible");
//     // pictures[nextcurrentVisiblePicture].classList.add("visible");
// });
