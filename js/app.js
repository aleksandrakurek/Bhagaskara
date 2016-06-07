// Hamburger menu
$(document).ready(function(){
	$("#hmb_menu").click(function(){
		$(this).toggleClass('open');
	});


// Hamburger menu- rozwijana lista
$(function() {
  var menuVisible = false;
  $('#hmb_menu').click(function() {
    if (menuVisible) {
      $('.nav-collapse').css({'display':'none'});
      menuVisible = false;
      return;
    }
    $('.nav-collapse').css({'display':'block'});
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
$(window).on("scroll",function(){
	console.log('działa');

	var topWindow = $(window).scrollTop();
	var topDiv = $("#sticky-div").offset().top;

	if(topWindow > topDiv){
		$("#sticky").addClass("positionTop");
	} else {
		$("#sticky").removeClass("positionTop");
	}
});

//Slider

document.addEventListener("DOMContentLoaded", function() {

    var prevButton = document.getElementById("prevPicture");
    var nextButton = document.getElementById("nextPicture");
    var pictures = document.querySelectorAll(".slider li");
    var currentVisiblePicture = 0; // na poczatku bedzie widoczny zerowy obrazek
		
    // console.log(prevButton);
    // console.log(nextButton);
    // console.log(pictures);

    pictures[currentVisiblePicture].classList.add("visible");

    prevButton.addEventListener("click", function(event) {
        console.log("Click in prev button");
        pictures[currentVisiblePicture].classList.remove("visible");
        currentVisiblePicture--;

        if (currentVisiblePicture < 0) {
            currentVisiblePicture = pictures.length - 1;
        }

        pictures[currentVisiblePicture].classList.add("visible");

    });

    nextButton.addEventListener("click", function(event) {
        console.log("Click in next button");
        pictures[currentVisiblePicture].classList.remove("visible");
        currentVisiblePicture++;

        if (currentVisiblePicture > (pictures.length - 1)) {
            currentVisiblePicture = 0;
        }

        pictures[currentVisiblePicture].classList.add("visible");
    });





});
