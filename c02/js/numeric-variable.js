/**
 * Created by ebad on 27.3.2016.
 */
var price;
var quantity;
var total;
price = 5;
quantity = 14;
total = price*quantity;

var el  = document.getElementsById('cost');
el.textContent = '$'+total;