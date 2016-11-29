$(document).ready(function () {

    $.backstretch('img/banner.png');

    $('#menu').slimmenu(
        {
            resizeWidth: '1015',
            collapserTitle: '',
            animSpeed: 'medium',
            easingEffect: null,
            indentChildren: false,
            childrenIndenter: '&nbsp;'
        });


    var logo = $('#logo-img');
    logo.hover(function () {
        $(this).addClass('animated hinge');
    }, function () {
        $(this).removeClass('animated hinge');
    });

    var navLinks = $('nav li');
    navLinks.hover(function () {
        $(this).addClass('animated tada');
    }, function () {
        $(this).removeClass('animated tada');
    });

    var timer = $('.events img');
    timer.addClass('animated flip');

    var award = $('.awards img');
    award.addClass('animated flip');
});
