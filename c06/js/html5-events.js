/**
 * Created by ebad on 2.4.2016.
 */
function setup(){
    var textInput;
    textInput = document.getElementById('message');
    textInput.focus();
}

window.addEventListener('DOMContentLoaded', setup, false);

window.addEventListener('beforeunload', function(event){
    var mesage = 'You might have unfinished business :D';
    (event || window.event).returnValue = message;
    return message;
});