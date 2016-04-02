/**
 * Created by ebad on 28.3.2016.
 */
var newEl = document.createElement('li');

var newText = document.createTextNode('quinoa');

newEl.appendChild(newText);

var position = document.getElementsByTagName('ul')[0];

position.appendChild(newEl);
