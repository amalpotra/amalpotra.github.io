//Wait for external resources for preloader and AOS
$(window).on('load', function () {
	loaderPage();
	AOS.init();
});
$(document).ready(function () {
	//Custom cursor
	var cursor = $('.cursor');
	$(window).mousemove(function (e) {
		cursor.css({
			top: e.clientY - cursor.height() / 2,
			left: e.clientX - cursor.width() / 2,
		});
	});
	$(window)
		.mouseleave(function () {
			cursor.css({ opacity: '0' });
		})
		.mouseenter(function () {
			cursor.css({ opacity: '1' });
		});
	$('a, i, time, .menu-toggle, .spotlight')
		.mouseenter(function () {
			cursor.css({ transform: 'scale(3.2)' });
		})
		.mouseleave(function () {
			cursor.css({ transform: 'scale(1)' });
		});
	$(window)
		.mousedown(function () {
			cursor.css({
				transform: 'scale(1.5)',
				transform: 'scale(.2)',
			});
		})
		.mouseup(function () {
			cursor.css({ transform: 'scale(1)' });
		});
	//Dynamic copyright year
	$('#copy').html(new Date().getFullYear());
});
//Hiding Loader
function loaderPage() {
	$('.my-loader').fadeOut('slow');
}
//Parallax Effect
var home = $('.home');
$('.home').mousemove(function (e) {
	home.css({
		backgroundPositionX: -e.screenX / 50 + 'px',
		backgroundPositionY: -e.screenY / 50 + 'px',
	});
});
//Disable nav menu for various events
function nav_disable() {
	if ($('.menu-toggle').hasClass('is-active')) {
		$('.nav').toggleClass('nav-dis');
		$('.menu-toggle').toggleClass('is-active');
		//Stack Animation
		$('.li_3').toggleClass('reveal_1');
		$('.li_2').toggleClass('reveal_2');
		$('.li_1').toggleClass('reveal_3');
	}
}
//Navbar Toggle Button
$('.menu-toggle').click(function () {
	$('.nav').toggleClass('nav-dis');
	$(this).toggleClass('is-active');
	//Stack Animation
	$('.li_3').toggleClass('reveal_1');
	$('.li_2').toggleClass('reveal_2');
	$('.li_1').toggleClass('reveal_3');
});
$('.nav ul').click(function (e) {
	if (!$(e.target).is('.nav li a')) {
		nav_disable();
	}
});
//Scrolling Events
var lastScrollTop = 0;
var freq = true;
$(window).on('scroll', function () {
	var scrollPos = $(window).scrollTop();
	//Progress Bar
	var winHeight = $(window).height();
	var docHeight = $(document).height();
	var perc = (scrollPos / (docHeight - winHeight)) * 100;
	$('#progress').width(perc + '%');
	//Scroll to top and Navigation menu show/hide
	if (scrollPos > lastScrollTop) {
		if (scrollPos > 50) {
			$('.scroll_top').css({ transform: 'translateY(0)' });
			$('.menu-toggle').css({ transform: 'translateY(-60px)' });
			nav_disable();
		}
	} else {
		if (scrollPos < 50) {
			$('.scroll_top').css({ transform: 'translateY(50px)' });
		}
		$('.menu-toggle').css({ transform: 'translateY(0)' });
	}
	lastScrollTop = scrollPos;
});
//Scroll to top
$('.scroll_top').click(function () {
	$('html, body').animate({ scrollTop: 0 }, 800);
	return false;
});
// Smooth Scrolling
$('#home').click(function () {
	$('html, body').animate({ scrollTop: 0 }, 800);
	nav_disable();
	return false;
});
$('#about, .bounce').click(function () {
	$('html, body').animate({ scrollTop: $('.profile').offset().top }, 800);
	nav_disable();
	return false;
});
$('#portfolio').click(function () {
	$('html, body').animate({ scrollTop: $('.timeline').offset().top }, 800);
	nav_disable();
	return false;
});
$('#social').click(function () {
	$('html, body').animate({ scrollTop: $('.footer').offset().top }, 800);
	nav_disable();
	return false;
});
