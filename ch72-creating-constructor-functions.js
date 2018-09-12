function Cat(color, gender) {
  this.color = color;
  this.gender = gender;
};

var cat10 = new Cat("white", "female");
alert("The cat is a "+cat10.color + " " + cat10.gender);
