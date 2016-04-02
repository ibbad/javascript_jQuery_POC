/**
 * Created by ebad on 27.3.2016.
 */
var itemTwo = document.getElementById('two');
var elText = itemTwo.firstChild.nodeValue;
elText = elText.replace('pine nuts', 'kale');
itemTwo.firstChild.nodeValue = elText;