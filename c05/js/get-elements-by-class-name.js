/**
 * Created by ebad on 27.3.2016.
 */
var elements = document.getElementsByClassName('hot');

if (elements.length > 2){
    var el = elements[2];
    el.className = 'cool';
}