/**
 * Created by ebad on 28.3.2016.
 */
var sx = document.getElementById('sx');     // ScreenX
var sy = document.getElementById('sy');     // ScreenY
var px = document.getElementById('px');     // pageX
var py = document.getElementById('py');     // pageY
var cx = document.getElementById('cx');     // clientX
var cy = document.getElementById('cy');     // clientY


function showPosition(event){
    sx.value = event.screenX;
    sy.value = event.screenY;
    px.value = event.pageX;
    py.value = event.pageY;
    cx.value = event.clientX;
    cy.value = event.clientY;
}

var el = document.getElementById('body');
el.addEventListener('mousemove', showPosition, false);

