var now = new Date();
var today = now.getDay();
var message;
switch(today) {
case 0 :
  message = "Weekend!";
  break;
case 6 :
  message = "Weekend!";
default :
  message = "Weekday";
}
alert(message);
