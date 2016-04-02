/**
 * Created by ebad on 27.3.2016.
 */
var pass = 50;
var score = 75;
var msg;

if (score >= pass){
    msg = 'Congratulations, you passed!';
} else {
    msg = 'Have another go!';
}

var el = document.getElementById('answer');
el.textContent = msg;