/**
 * Created by ebad on 27.3.2016.
 */
var today = new Date();
var year = today.getFullYear();

var el = document.getElementById('footer');
el.innerHTML = '<p>Copyright &copy;'+year+'</p>';