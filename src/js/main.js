$(document).ready(function () {
    $('#pro').hover(function () {
        $('#client').addClass('inactive');
    }, function () {
        $('#client').removeClass('inactive');
    });

    $('.home #content').addClass('loaded');
    $('.home #social').addClass('loaded');
    $('.home #footer').addClass('loaded');

    $('.confirmation #confetti').addClass('loaded');
    $('.confirmation #content').addClass('loaded');
    $('.confirmation #social').addClass('loaded');
    $('.confirmation #footer').addClass('loaded');
});