/**
 * Created by ebad on 27.3.2016.
 */
var randomNum = Math.floor((Math.random()*10)+1);

var el = document.getElementById('info');
el.innerHTML = '<h2>Random number: </h2><p>'+ randomNum +'</p>';