/**
 * Created by ebad on 28.3.2016.
 */
    // get the element where changes are to be made.
var list = document.getElementsByTagName('ul')[0];

// add new item to the end of list.
var newItemLast = document.createElement('li');
var newTextLast = document.createTextNode('cream');
newItemLast.appendChild(newTextLast);
list.appendChild(newItemLast);

// add new item to start of the list
var newItemFirst = document.createElement('li');
var newTextFirst = document.createTextNode('kale');
newItemFirst.appendChild(newTextFirst);
list.insertBefore(newItemFirst, list.firstChild);       // add element

var listItems = document.querySelectorAll('li');
var i;
for (i=0; i<listItems.length; i++){
    listItems[i].className = 'cool';
}

var heading = document.querySelector('h2');
var headingText = heading.firstChild.nodeValue;
var totalItems = listItems.length;
var newHeading = headingText + '<span>' + totalItems +'</span>';
heading.textContent = newHeading;