/**
 * Created by ebad on 27.3.2016.
 */
var startItem = document.getElementsByTagName('ul')[0]
var firstItem = startItem.firstChild;
var lastItem = startItem.lastChild;

firstItem.setAttribute('class', 'complete');
lastItem.setAttribute('class', 'cool');