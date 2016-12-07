# Final Project - Part 3
Lauren Yockey / Adv Web 2 / Dec 7, 2016
## Links
* [Live Site](http://laurenyockey.com/adv_web_2/project_final3_yockey_lauren/index.html)
* [Repo](https://github.com/lyockey/project_final3_yockey_lauren)
* [W3C Validator](https://validator.w3.org/unicorn/check?ucn_uri=laurenyockey.com%2Fadv_web_2%2Fproject_final3_yockey_lauren%2Findex.html&ucn_task=conformance#)
* HTML5 Outliner:
    * [Home](https://gsnedders.html5.org/outliner/process.py?url=http%3A%2F%2Flaurenyockey.com%2Fadv_web_2%2Fproject_final3_yockey_lauren%2Findex.html)
    * [Menu](https://gsnedders.html5.org/outliner/process.py?url=http%3A%2F%2Flaurenyockey.com%2Fadv_web_2%2Fproject_final3_yockey_lauren%2Fmenu.html)
    * [Special](https://gsnedders.html5.org/outliner/process.py?url=http%3A%2F%2Flaurenyockey.com%2Fadv_web_2%2Fproject_final3_yockey_lauren%2Fspecial.html)
    * [Upcoming Events](https://gsnedders.html5.org/outliner/process.py?url=http%3A%2F%2Flaurenyockey.com%2Fadv_web_2%2Fproject_final3_yockey_lauren%2Fevents.html)
    * [Awards](https://gsnedders.html5.org/outliner/process.py?url=http%3A%2F%2Flaurenyockey.com%2Fadv_web_2%2Fproject_final3_yockey_lauren%2Fawards.html)
    * [Contact](https://gsnedders.html5.org/outliner/process.py?url=http%3A%2F%2Flaurenyockey.com%2Fadv_web_2%2Fproject_final3_yockey_lauren%2Fcontact.html)

## Resources
### Plugins
* [Backstretch](http://srobbin.com/jquery-plugins/backstretch/)

    I decided to go with a nice big Backstretch image instead of the banner image I originally intended. I thought having the large illustrated image of the restaurant in the background had more of a children's literature appeal.

* [Lightbox](http://lokeshdhakar.com/projects/lightbox2/)

    Good ole Lightbox. I used this plugin to create an image gallery of my restaurant menu. It only displays three images at a time because I purposefully broke them up by food category (i.e. appetizer, entree, etc.).

* [SlimMenu](http://adnantopal.github.io/slimmenu/)

    The navigation menu became a bit too obtrusive when the page items were set to `display: block`, so I scoured the endless Google results of hamburger menu plugins until I found one that was ridiculously simple and very customizable. You will see in my commits that I tried a different menu plugin before this, but this one fits my site much better.

* [Animate.CSS](https://daneden.github.io/animate.css/)

    This is probably my favorite plugin of all time. Being a Harry-Potter-themed website pretty much means animation and interactivity is a must. The site needs to have a magical quality, and I felt that animation and hover effects were the best way to achieve that. Each header element has some sort of entrance effect on load, while the logo will drop off the screen on hover. The contact images on the Contact page will also wiggle on hover.

### Other Resources
* I will spare you the millions of links to the images I used, but I found all of them via Google Search :)

* Harry Potter Info:
    * [Harry Potter Wikia - Category: Food](http://harrypotter.wikia.com/wiki/Category:Foods)
    * [Pottermore - The Leaky Cauldron](https://www.pottermore.com/writing-by-jk-rowling/the-leaky-cauldron)

* [Stack Overflow - Remove element for certain screen sizes](http://stackoverflow.com/questions/17762354/remove-element-for-certain-screen-sizes)

    I wanted to hide the `h1` text on mobile screens to save real estate. This thread told me how to do that with a `display: none` property.

* [W3C - CSS3 Transitions](http://www.w3schools.com/css/css3_transitions.asp)

    For the menu gallery, the Animate plugin didn't work too nicely. So instead I just coded a subtle CSS transition that will slightly enlarge the thumbnail (and also the menu link on the home page).

#### Custom jQuery
* [jQuery - .hover();](https://api.jquery.com/hover/)

    This is the site I referenced for my custom jQuery. I used it to apply the Animate.CSS plugin animations as a hover effect rather than just a one-time occurrence or an infinite loop. While I already knew the basics of `.hover();` as an event listener, I also knew from previous classes that to get it to work, I'd need to use `this` and have a way to escape the effect once the hover event ends. This listener was applied to my dropdown navigation items, my logo image, and my contact images.

#### Custom JavaScript
* JavaScript Event Listeners
    * [JavaScript HTML DOM EventListener](http://www.w3schools.com/js/js_htmldom_eventlistener.asp)
    * [Canvas - Listening for Events](https://ufl.instructure.com/courses/330762/pages/listening-for-events?module_item_id=6205793)

* JavaScript Nodes & DOM Elements
    * [Canvas - The DOM and provided functionality](https://ufl.instructure.com/courses/330762/pages/the-dom-and-provided-functionality?module_item_id=6205791)
    * [W3Schools - Creating New HTML Elements (Nodes)](http://www.w3schools.com/js/js_htmldom_nodes.asp)
    * [W3Schools HTML DOM innerHTML Property](http://www.w3schools.com/jsref/prop_html_innerhtml.asp)
    * [Stack Overflow - Remove element by ID](http://stackoverflow.com/questions/3387427/remove-element-by-id)
    * [Jake Trent.com - Add/Remove Classes with Raw JavaScript](http://jaketrent.com/post/addremove-classes-raw-javascript/)

## Deductions
_I reviewed the list of deductions for this project and in the syllabus._

## Comments

1. My site didn't pass the CSS validator thanks to my Animate.CSS and normalize stylesheets. However I extensively looked through the remaining errors and warnings and nothing should be faulty in my own code.

2. Thanks for your help with my JavaScript! I'm really happy with the result.

3. Thanks for an awesome semester! I've learned so much!
