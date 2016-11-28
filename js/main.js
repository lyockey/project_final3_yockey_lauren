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

    $('#logo-img').addClass('animated infinite pulse');

    $('.nav-link').hover(function () {
        $(this).addClass('animated tada');
    }, function () {
        $(this).removeClass('animated tada');
    });
});
