$(document).ready(function() {

	var nav_height = $('#nav-bar').offset().top;

	$(window).scroll(function() {
        var scrolled = $(window).scrollTop();
        $('.top-pic').css("top", - (scrolled * 0.5) + "px");
        if (scrolled > nav_height) {
            $('#nav-bar').css('position', 'fixed');
        	$('#nav-bar').addClass('navbar-active');
            $('.content').css('padding-top', '40px');
        } else {
        	$('#nav-bar').removeClass('navbar-active');
            $('#nav-bar').css('position', 'relative');
            $('.content').css('padding-top', '0px');
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

    $('.content-box.projects').hover(function () {
        $(this).css('border', 'solid #8600b3 3px');
    }, function () {
        $(this).css('border', 'solid #8600b3 1px');
    });

    $('.content-box.act').hover(function () {
        $(this).css('border', 'solid #e68a00 3px');
    }, function () {
        $(this).css('border', 'solid #e68a00 1px');
    });
});
