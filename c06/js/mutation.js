/**
 * Created by ebad on 2.4.2016.
 */
var elList, addLink, newEl, newText, counter, listItems;

elList = document.getElementById('list');
addLink = document.querySelector('a');
counter = document.getElementById('counter');

function addItem(e){
    e.preventDefault();
    newEl = document.createElement('li');
    newText = document.createTextNode('Item: '+String(Number(list.getElementsByTagName('li').length)+1));
    newEl.appendChild(newText);
    elList.appendChild(newEl);
}

function updateCount(){
    listItems = list.getElementsByTagName('li').length;
    counter.innerHTML = listItems;
}

addLink.addEventListener('click', addItem, false);
elList.addEventListener('DOMNodeInserted', updateCount, false);