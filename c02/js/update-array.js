/**
 * Created by ebad on 27.3.2016.
 */
// Create an array
var colors=['white', 'black', 'custom'];

// Update the third element
colors[2] = 'beige';

// Get element with an id of colors
var el= document.getElementById('colors');

// Replace with third item for the array
el.textContent = colors[2]
