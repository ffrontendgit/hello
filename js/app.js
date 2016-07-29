$(document).ready(function(){

	if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
		window.onmousewheel = document.onmousewheel = wheel;

	function wheel(event) {
	    var delta = 0;
	    if (event.wheelDelta) delta = event.wheelDelta / 130;
	    else if (event.detail) delta = -event.detail / 1;

	    handle(delta);
	    if (event.preventDefault) event.preventDefault();
	    event.returnValue = false;
	}

	function handle(delta) {
	    var time = 700;
		var distance = 400;
	    
	    $('html, body').stop().animate({
	        scrollTop: $(window).scrollTop() - (distance * delta)
	    }, time );
	}

		$('#nav-icon3').click(function(){
		$(this).toggleClass('open');
		$('.nav_ul').toggleClass('show_menu');
	});

	//movie header

	



});