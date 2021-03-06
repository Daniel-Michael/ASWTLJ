// Carrying on with lessons and exercises from A Smarter Way To Learn jQuery

// Assign an element to a var then manipulate (change class) using the var
var p1 = $("p#main");
p1.attr("id", "secondary");

// assign an image to a var, then use var to manipulate (slideDown)
var pic = $("img#dong");
pic.slideDown();

// assign image and animation speed to vars, then use vars to manipulate
var pic = $("img#loris");
var speed = 3000;
pic.slideUp(speed);

// a user clicks a button and a var is used to add a class to the element
$("button#b1").on("click", function() {
  var graphs = $("p:contains('loris')");
  graphs.addClass("special");
});

// a user clicks a button and an element is hidden using declared variables
var myBig = $("p#p3");
var mySpeed = 3000;
$("button#b1").on("click", function() {
  myBig.hide(mySpeed);
});

// a user enters data into a form, and that data is saved to a variable
$("form#contact").on("submit", function() {
  var first = $("input#name_first").val();
});

// When the user mouses over a certain paragraph, the word "now" is inserted back into the paragraph with the text
$("p#urge").on("mouseover", function() {
  $(this).text($(this).text() + "now");
});

// user enters her first name in a field which is then added to the element's ID
$("button#b1").on("click", function() {
  var first_name = $("input#t1").val();
  $("p#p1").text(first_name);
});

// enter data from one input entry into another
$("input#entry_2").val($("input#entry_1").val());

// fill an empty html element with personalised text
<h4 id="personalisedQuote"></h4>
$("form#userName").on("submit", function() {
  var first_name = $("input#firstName").val();
  var last_name = $("input#secondName").val();
  $("h4#personalisedQuote").text("Personal Quote of the day for " + first_name + " " + last_name);
});
