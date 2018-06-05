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

    var source = getParameterByName('source');

    if (source == 'app') {
        $('.legal .back').addClass('app');
        $('.legal .container').addClass('app');
        $('.legal h1').addClass('app');
        $('.legal .updated').addClass('app');
        $('.legal .talk').addClass('app');
    }
});

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
