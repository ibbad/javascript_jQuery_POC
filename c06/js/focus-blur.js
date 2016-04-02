/**
 * Created by ebad on 28.3.2016.
 */
function checkUsername(){
    var username = el.value;
    if(username.length <5){
        elMsg.className = 'warning';
        el.textContent = 'Not long enough, yet...';
    } else {
        elMsg.textContent = '';
    }
}

function tipUsername(){
    elMsg.className = 'tip';
    elMsg.innerHTML = 'Username must be atleast 5 characters';
}

var el = document.getElementById('username');
var elMsg = document.getElementById('feedback');

el.addEventListener('focus', tipUsername, false);
el.addEventListener('blur', checkUsername, false);