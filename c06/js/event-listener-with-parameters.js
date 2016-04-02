/**
 * Created by ebad on 28.3.2016.
 */
var elUsername = document.getElementById('username');
var elMsg = document.getElementById('feedback');

function checkUsername(minLength){
    if(elUsername.value.length < minLength){
        // set error message
        elMsg.textContent = 'Username must be '+minLength+' characters or more';
    } else {
        elMsg.innerHTML = '';
    }
}

elUsername.addEventListener('blue', function(){
    checkUsername(5);
}, false);