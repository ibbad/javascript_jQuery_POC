/**
 * Created by ebad on 5.4.2016.
 */
var elMap = document.getElementById('loc');
var msg = 'Sorry, location is not available';

if (Modernizr.geolocation){
    navigator.geolocation.getCurrentPosition(success, fail);
    elMap.textContent = 'checking location...';
} else {
    elMap.textContent = msg;
}

function success(position){
    msg = '<h3>Longitude:<br>';
    msg += position.coords.latitude + '</h3>';
    msg += '<h3>Latitude:<br>'
    msg += position.coords.latitude + '</h3>';
    elMap.innerHTML = msg;
}

function fail(msg){
    elMap.textContent = msg;
    console.log(msg.code);
}