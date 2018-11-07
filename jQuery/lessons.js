BASIC jQUERY lessons with Mark Myers - A Smarter Way To Learn jQuery

// the selector comprises the dollar sign the parentheses and the quotation marks
// what follows the period is the action, or method

// hide all images
$("img").hide();

// addClass method: add #someClass to all paragraph tags
$("p").addClass("someClass");

// removeClass method: remove #someClass from all paragraph tags
$("p").removeClass("someClass");

// add class by additional class name
$("p.important").addClass("someClass");

// or just the elements of that class
$(".important").addClass("someClass");

// insert text or HTML method
$("#nav2").text("This is plain text");

$("#nav2").html("<p>This html</p>");

// Read user entry of ID #nameInput and save to a variable
var userNameInput = $("input#nameInput").val();

// insert a value into a form field by ID
$("input#userInput").val(someVariable);
 
// or insert a string enclosed in quotation marks
$("input#userInput").val("New York");

// or read user input and insert it into a second field
$("input#someInput").val($("input#otherInput").val());

// or read the text in a paragraph and store it in a variable
var theNewText = $("p#introText").text();

// fade in or out, elements with an id.... 
$("p#rules").fadeOut("fast");

// listen for a click or double click by element
$("h2#bigger").on("click dblclick"...
                  
// take action on click
$("h2#bigger").on("click dblclick", function() {
  $("img").hide();
});

// add a class to all divs when a button is clicked
$("button#baldy").on("click", function() {
  $("div").addClass("hairy");
});

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
