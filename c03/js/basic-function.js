/**
 * Created by ebad on 27.3.2016.
 */
var msg = 'Sign up to receive our newsletter for 10% off!';
function updateMessage(){
    var el = document.getElementById('message');
    el.textContent = msg;
}
updateMessage()