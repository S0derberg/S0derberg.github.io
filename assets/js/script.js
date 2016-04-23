$(document).ready(function() {

	var nav_height = $('#nav-bar').offset().top;

	$(window).scroll(function() {
        var scrolled = $(window).scrollTop();
        $('#top-pic').css("top", -(scrolled * 0.2) + "px");
        if (scrolled > nav_height) {
            $('#nav-bar').css('position', 'fixed');
        	$('#nav-bar').addClass('navbar-active');
        } else {
        	$('#nav-bar').removeClass('navbar-active');
            $('#nav-bar').css('position', 'relative');
        }
    });

    $('.square-button.li').hover(function () {
        $('.square-button.li').addClass('square-button-active');
    }, function () {
        $('.square-button.li').removeClass('square-button-active');
    });

    $('.square-button.fb').hover(function () {
        $('.square-button.fb').addClass('square-button-active');
    }, function () {
        $('.square-button.fb').removeClass('square-button-active');
    });

    $('.square-button.gh').hover(function () {
        $('.square-button.gh').addClass('square-button-active');
    }, function () {
        $('.square-button.gh').removeClass('square-button-active');
    });






});