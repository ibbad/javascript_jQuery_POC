/**
 * Created by ebad on 5.4.2016.
 */
if (window.sessionStorage){
    var txtUsername = document.getElementById('username');
    var txtAnswer = document.getElementById('answer');

    txtUsername.value = sessionStorage.getItem('username');
    txtAnswer.value = sessionStorage.getItem('answer');

    txtUsername.addEventListener('input', function () {
        sessionStorage.setItem('username', txtUsername.value);
    });

    txtAnswer.addEventListener('input', function(){
        sessionStorage.setItem('answer', txtAnswer.value);
    });
}