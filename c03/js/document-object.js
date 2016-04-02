/**
 * Created by ebad on 27.3.2016.
 */
var msg = '<p><b>page title: </b>'+document.title+'<br/>';
msg += '<b>page address: </b>'+document.URL+'<br/>';
msg += '<b>last modified: </b>'+document.lastModified+'</p>';

var el = document.getElementById('footer');
el.innerHTML = msg;