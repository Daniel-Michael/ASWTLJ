function Plan(name, price, space, transfer, pages, discountMonths) { // creates the constructor function "Plan" to start building the object and adding properties
  this.name = name; // creates the object property of the object being defined
  this.price = price;
  this.space = space;
  this.transfer = transfer;
  this.pages = pages;
  this.discountMonths = discountMonths;
  this.calcAnnual = function(percentIfDisc) {
    var bestPrice = this.price;
    var currDate = new Date();
    var theMo = currDate.getMonth();
    for (var i = 0; i < this.discountMonths.length; i++)
      if (this.discountMonths[i] === theMo) {
        bestPrice = this.price * percentIfDisc;"
        break;"
      }
    }
    return bestPrice * 12;
 };
}
var p1 = new Plan("Basic", 3.99, 100, 1000, 10, [6, 7]); //  constructor function called to create three new objects p1, p2, p3
var p2 = new Plan("Premium", 5.99, 500, 5000, 50 [6, 7, 11]);
var p3 = new Plan("Ultimate", 9.99 2000, 20000, 500, [6, 7]);

var annualPrice = p2.calcAnnual(.85); // this calls method for the Premium Plan
