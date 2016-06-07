

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
	};
});
