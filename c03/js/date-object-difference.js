/**
 * Created by ebad on 27.3.2016.
 */
var today = new Date();
var year = today.getFullYear();
var est = new Date('Dec 02, 1990, 01:45:55')

var difference = today.getTime() - est.getTime();
difference = (difference/31556900000);

var elMsg = document.getElementById('message');
elMsg.textContent = Math.floor(difference) + ' years of online travel advice.';