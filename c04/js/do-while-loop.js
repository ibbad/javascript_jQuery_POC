/**
 * Created by ebad on 27.3.2016.
 */
var i = 1;
var msg = '';

do {
    msg += i + ' x 5 = ' + (i*5) + '<br/>';
    i++;
} while (i<1);

document.getElementById('answer').innerHTML = msg;