/**
 * Created by ebad on 28.3.2016.
 */
function checkUsername(){
    var elMsg = document.getElementById('feedback');
    var elUsername=document.getElementById('username');
    if (elUsername.value.length < 5){
        elMsg.textContent = 'Username must be 5 character or more';
    }else{
        elMsg.textContent = '';
    }
}