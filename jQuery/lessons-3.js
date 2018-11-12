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
