$(document).ready(function () {

    /////////// BACKSTRETCH ///////////////
    $.backstretch('img/banner.png');

    ////////// SLIM MENU //////////////////
    $('#menu').slimmenu(
        {
            resizeWidth: '950',
            collapserTitle: '',
            animSpeed: 'medium',
            easingEffect: null,
            indentChildren: false,
            childrenIndenter: '&nbsp;'
        });

    /////////// CUSTOM JQUERY ///////////////
    // To get the Animate.CSS plugin to work as a hover effect, I added an event listener to listen for a hover. On hover, the plugin class name and animation style should be added. After hover, the class name should be removed. I used `this` to target whichever individual element is being hovered.

    //Define variable of target element
    var logo = $('#logo-img');
    //Entrance Animation
    logo.addClass('animated bounce');
    //Hover Effect
    logo.hover(function () {
        $(this).addClass('animated hinge');
    }, function () {
        $(this).removeClass('animated hinge');
    });

    //Define variable of target element
    var navLinks = $('nav li');
    //Hover Effect
    navLinks.hover(function () {
        $(this).addClass('animated tada');
    }, function () {
        $(this).removeClass('animated tada');
    });

    //Define variable of target element
    var contact = $('.contact img');
    //Hover Effect
    contact.hover(function () {
        $(this).addClass('animated swing');
    }, function () {
        $(this).removeClass('animated swing');
    });

    //For all other one-time animations on page load, I added the necessary plugin class name to initiate the animation.

    var title = $('h2');
    title.addClass('animated lightSpeedIn');

    var subTitle = $('h3');
    subTitle.addClass('animated fadeInUp');

    var timer = $('.events img');
    timer.addClass('animated flip');

    var award = $('.awards img');
    award.addClass('animated flip');

});
