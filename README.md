# _Drew's Pizza Pavilion_

#### A web application for Drew's Pizza Pavilion that allows a user to order pizza and view the cost after ordering what type and size of pizza they want.

#### By **Drew Stanger**

## Description

This is a web application for a pizza company where a user can choose to order a pizza with one or more individual toppings and specify the pizza size. The application displays the total order cost when the user clicks submit.  The app:

* Includes a pizza object constructor with properties for toppings, size, number of toppings, and cost.
* Includes a customer object constructor with properties name, order (array of pizzas), and order cost.
* Includes a pizza prototype method to calculate cost of a pizza depending on the selections chosen.

## Specifications
| Behavior |  Input   |  Output  |
|----------|:--------:|:--------:|
|The program provides a form for the user to enter their, and select a pizza size and desired toppings.  Only one pizza size can be selected from a drop down menu.  Any number of toppings can be selected by checking checkboxes | Name = Drew, Size = Large, Toppings = Bell peppers, Mushrooms, Pesto, Feta cheese | N/A |
|The program stores the user input as variables (toppings are stored in an array) | N/A | N/A |
|The program calculates the base cost of the pizza based on the size selected.  Small = $12, Medium = $15, Large = $18 | Size = Large | Not displayed(Cost = $18)|
|The program updates the cost of the pizza based on the number of toppings selected.  Each topping is $1 added to the base cost. | Size = Large, Toppings = Salami, Pepperoni, Jalapenos, Banana peppers | Not displayed(Cost = $22)|
|The program displays the final cost of the pizza | Name = Drew, Size = Large, Toppings = Salami, Pepperoni, Jalapenos, Banana peppers| "Order confirmation for Drew: Total Cost = $22" |

## Setup/Installation Requirements

* Clone this repository
* Open in web browser

## Technologies Used
* HTML
* CSS
* Bootstrap
* JavaScript
* J-query

### License
Copyright (c) 2019 **Drew Stanger**
