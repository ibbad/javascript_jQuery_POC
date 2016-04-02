/**
 * Created by ebad on 28.3.2016.
 */
var el;
function charCount(e){
    var textEntered, charDisplay, counter, lastKey;
    textEntered = document.getElementById('message').value;
    charDisplay = document.getElementById('charactersLeft');
    counter = (180 - (textEntered.length));
    charDisplay.textContent = counter;

    lastKey = document.getElementById('lastKey');
    lastKey.textContent = 'Last key in ASCII code: '+ String.fromCharCode(e.keyCode)+'('+ e.keyCode+')';
}

el = document.getElementById('message');
el.addEventListener('keypress', charCount, false);