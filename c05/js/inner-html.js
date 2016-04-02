/**
 * Created by ebad on 28.3.2016.
 */
var firstItem = document.getElementById('one');

var itemContent = firstItem.innerHTML;

firstItem.innerHTML = '<a href=\"http://example.org\">'+itemContent+'</a>';