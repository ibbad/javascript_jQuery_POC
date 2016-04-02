/**
 * Created by ebad on 3.4.2016.
 */
$(function(){
    $('ul').before('<p class="notice">just updated</p>');
    $('li.hot').prepend('+ ');
    var $newListItem = $('<li><em>gluten-free</em> soy sauce</li>');
    $('li:last').after($newListItem);
});