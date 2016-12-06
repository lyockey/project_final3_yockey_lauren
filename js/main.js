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


//////// CUSTOM JAVASCRIPT //////
/////// On the Events page, show only the first event on load. When the user clicks on the Show Next Event button, a new article with the second event will be created, along with its inner HTML, and be appended to the parent container. When the next event is appended, the original button will be removed to avoid repetitive appending.

var more = document.getElementById('more');
var events = document.getElementsByClassName('events')[0];

more.addEventListener('click', function (event) {
    event.preventDefault();
    var event2 = document.createElement('article');

    event2.innerHTML = '<img src="img/event.png" alt="Upcoming Event"><h3>Slug Club Alumni Meeting</h3><p>Meet all of Professor Horace Slughorn\'s favorite pupils and see how they have taken the Wizarding World by storm. If you have dreams of one day working at the Ministry of Magic, you don\'t want to miss this exclusive networking event.</p><a href="#events" class="menu-button" id="more2">Show Next Event</a>';

    event2.className = 'animated fadeInUp';
    events.appendChild(event2);
    more.parentNode.removeChild(more);

    var more2 = document.getElementById('more2');

    more2.addEventListener('click', function (e) {
        e.preventDefault();
        var event3 = document.createElement('article');

        event3.innerHTML = '<img src="img/event.png" alt="Upcoming Event"><h3>Goblin Speed Dating</h3><p>Our monthly speed-dating event is sure to help the lonely goblin find a love connection outside of Gringott\'s walls.</p>';

        event3.className = 'animated fadeInUp';
        events.appendChild(event3);
        more2.parentNode.removeChild(more2);
    });

});

///// Same type of append event, but on the Awards page
var next = document.getElementById('next');
var awards = document.getElementsByClassName('awards')[0];

next.addEventListener('click', function (event) {
    event.preventDefault();
    var award2 = document.createElement('article');

    award2.innerHTML = '<img src="img/award.png" alt="Award"><h3>2014 Daily Prophet\'s Friendliest Innkeeper</h3><p>With a hunch in his back and a smile on his face, Tom is sure to make your stay above the pub as pleasant as possible.</p>';

    award2.className = 'animated fadeInUp';
    awards.appendChild(award2);
    next.parentNode.removeChild(next);
});
