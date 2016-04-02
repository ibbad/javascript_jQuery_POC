/**
 * Created by ebad on 27.3.2016.
 */
var inStock;
var shipping;

inStock = true;
shipping = false;

/*
* Some other processing done here and script updates the variables.
*/

inStock = false;
shipping = true;

var elStock = document.getElementById('stock');
elStock.className = inStock;

var elShip = document.getElementById('shipping');
elShip.className = shipping;
