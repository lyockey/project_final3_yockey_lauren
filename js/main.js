$(document).ready(function () {

    $.backstretch('img/banner.png');

    $('#menu').slimmenu(
        {
            resizeWidth: '950',
            collapserTitle: '',
            animSpeed: 'medium',
            easingEffect: null,
            indentChildren: false,
            childrenIndenter: '&nbsp;'
        });


    var logo = $('#logo-img');
    logo.addClass('animated bounce');
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

    var title = $('h2');
    title.addClass('animated lightSpeedIn');

    var subTitle = $('h3');
    subTitle.addClass('animated fadeInUp');

    var timer = $('.events img');
    timer.addClass('animated flip');

    var award = $('.awards img');
    award.addClass('animated flip');

    var contact = $('.contact img');
    contact.hover(function () {
        $(this).addClass('animated swing');
    }, function () {
        $(this).removeClass('animated swing');
    });

});
