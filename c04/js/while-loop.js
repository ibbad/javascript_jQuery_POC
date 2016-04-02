/**
 * Created by ebad on 27.3.2016.
 */
var i = 1;
var msg = '';

while (i<10){
    msg += i + ' x 5 = ' + (i*5) + '<br/>';
    i++;
}

document.getElementById('answer').innerHTML = msg;