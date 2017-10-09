$(document).ready(function () {
    $('#pro').hover(function () {
        $('#client').addClass('inactive');
    }, function () {
        $('#client').removeClass('inactive');
    });

    $('.home #content').addClass('loaded');
    $('.home #social').addClass('loaded');
    $('.home #footer').addClass('loaded');
});