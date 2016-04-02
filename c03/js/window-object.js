/**
 * Created by ebad on 27.3.2016.
 */
var msg = '<h2>browser window</h2><p>width: '+window.innerWidth+ '</p>';
msg += '<p>height: ' +window.innerHeight+ '</p>';

msg += '<h2>history</h2><p>'+window.history.length+'</p>';
msg += '<h2>screen</h2><p> width: '+window.screen.width+'</p>';
msg += '<h2>height: </h2><p>'+window.screen.height+'</p>';

var el = document.getElementById('info');
el.innerHTML = msg;

alert('Current page:' + window.location);