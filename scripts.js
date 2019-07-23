//BUSINESS LOGIC
//Objects
function Customer(name){
  this.name = name;
  this.order = []; //Array of pizza(s)
  this.orderCost = 0; //Sum of pizza cost(s)
}

function Pizza(size, toppings){
  this.size = size;
  this.toppings = toppings;
  this.numberOfToppings;
  this.cost;
}

//Prototypes
Pizza.prototype.countToppings = function () {
  this.numberOfToppings = this.toppings.length;
}

Pizza.prototype.singlePieCost = function () {
  if (this.size === "small"){
    this.cost = 12 + this.numberOfToppings;
  } else if (this.size === "medium"){
    this.cost = 15 + this.numberOfToppings;
  } else {
    this.cost = 18 + this.numberOfToppings;
  }
}

//UI LOGIC
$(document).ready(function()


  //Submit Order Pizza Form
  $("form.order-form").submit(function(event){
    event.preventDefault();
    var nameInput = $("#customer-name-input").val();
    var customerOne = new Customer(nameInput);


    //Display
    $(".output").show();
    $(".output-name").text(customerOne.name);
    for (var i = 0; i < customerOne.order.length; i++) {
      var i;
      $(".output-order").append("One " + customerOne.order[i].size + " pizza with " + customerOne.order[i].numberOfToppings + " toppings." + '<br>');
    }
    $(".output-order-total").text(customerOne.orderCost);
