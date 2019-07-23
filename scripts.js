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
$(document).ready(function(){
  //Add Another Pizza
  $("#add-pizza-button").click(function(){
    $(".additional-pizzas").append('<div class="new-pizza">'
                                  + '<div class="form-group">'
                                  + '<h5> Choose Your Size: </h5>'
                                  +'<select class="pizza-size-input">'
                                  +'<option value = "small">Small</option>'
                                  +'<option value = "medium">Medium</option>'
                                  +'<option value = "large">Large</option>'
                                  +'</select>'
                                  +'</div><br>'
                                  +'<div class="pizza-toppings" class="form-group">'
                                  +'<input type="checkbox" name="topping" value="Salami">  Salami<br>'
                                  +'<input type="checkbox" name="topping" value="Pepperoni">  Pepperoni<br>'
                                  +'<input type="checkbox" name="topping" value="Sausage">  Sausage<br>'
                                  +'<input type="checkbox" name="topping" value="artichokes">  Artichokes<br>'
                                  +'<input type="checkbox" name="topping" value="Jalapenos">  Jalapenos<br>'
                                  +'<input type="checkbox" name="topping" value="Mushrooms">  Mushrooms<br>'
                                  +'<input type="checkbox" name="topping" value="Banana Peppers">  Banana Peppers<br>'
                                  +'<input type="checkbox" name="topping" value="Tomatoes">  Tomatoes<br>'
                                  +'<input type="checkbox" name="topping" value="Chicken">  Chicken<br>'
                                  +'</div><hr>'
                                  + '</div>');
  }); //Click function close

  //Submit Order Pizza Form
  $("form.order-form").submit(function(event){
    event.preventDefault();
    var nameInput = $("#customer-name-input").val();
    var customerOne = new Customer(nameInput);

    //New Pizza Loop for multiple pizzas to collect size and toppings inputs for each pizza
    $(".new-pizza").each(function(event){
      var sizeInput = $(this).find(".pizza-size-input").val();
      var toppingsInput = [];
      $(this).find(".pizza-toppings input:checkbox[name=topping]:checked").each(function(){
        toppingsInput.push($(this).val()); //Push toppings to toppingsInput array
      });
      var newPizza = new Pizza(sizeInput, toppingsInput);
      customerOne.order.push(newPizza); //Populates array of pizzas for customer order property

      //Call prototypes to calculate order cost of newPizza
      newPizza.countToppings();
      newPizza.singlePieCost();
      customerOne.orderCost += newPizza.cost; //Updates customer's order cost
    }); //New pizza loop close

    //Display
    $(".output").show();
    $(".output-name").text(customerOne.name);
    for (var i = 0; i < customerOne.order.length; i++) {
      var i;
      $(".output-order").append("One " + customerOne.order[i].size + " pizza with " + customerOne.order[i].numberOfToppings + " toppings." + '<br>');
    }
    $(".output-order-total").text(customerOne.orderCost);

    //Clear fields
    $(".additional-pizzas").text(""); //Clear additional pizza fields
    this.reset(); //Reset form
  }); //Order form submit close
