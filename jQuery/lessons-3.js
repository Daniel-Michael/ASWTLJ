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
