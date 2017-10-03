$(document).ready(function () {
    $('#pro').hover(function () {
        $('#client').addClass('inactive');
    }, function () {
        $('#client').removeClass('inactive');
    });
});