/**
 * Created by ebad on 27.3.2016.
 */
var pass = 50;
var score = 90;

var hasPassed = score >=pass;

var el = document.getElementById('answer');
el.textContent = 'Level passed: ' + hasPassed;