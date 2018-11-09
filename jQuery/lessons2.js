// Lessons from A Smarter Way to Learn jQuery with animations and increasing difficulty

// slide an element (by class) into view
$("div.spoon").slideDown();

// slide an element out of view
$("div.spoon").slideUp();
                  
//  slide all images of a particular class into view when the user clicks a p element class
$("p#bigger").on("click", function() {
  $("img.smaller").slideDown();
});

// hide, show or toggle elements with speed optional 
$("img#doggo").hide("fast");
$("img#doggo").show("slow");
$("img#doggo").toggle("2000");

// toggle, hide or show within a function
$("input#boner").on("focus", function() {
  $("p#bug").show();
});

//change multipe CSS styles inline
$("p#thong").css({
  "font-size": "2.5em",
  "color": "red"
});

// when a user clicks a paragraph, the font size increases, using `this` keyword
$("p").on("click", function() {
  $(this).css("font-size", "2.5em");
});

// when a use mouses over, or clicks, an element, it applies a new class
$("img").on("click", function() {
  $(this).attr("class", "invisible");
});

// remove an image and html tags using `remove` or remove content inside tags only with `empty`
$("img").on("click", function() {
  $("img").remove();
});

//toggleClass on button click
$("button#b1").on("click", function() {
  $("h4, .changeable").toggleClass("big bright");
});

// use toggleClass to remove or add a class on mouseover
$("p#moose").on("mouseover", function() {
  $(this).toggleClass("bing");
});
$("p#moose").on("mouseout", function() {
  $(this).toggleClass("bing");
});

// when a user clicks on any p with id of p1, p2 or p3, it is repladed with new text
$("p#p1, p#p2, p#p3").on("click", function() {
  $(this).replaceWith("<p>Some new par</p>");
});
