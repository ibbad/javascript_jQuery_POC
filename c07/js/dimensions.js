/**
 * Created by ebad on 3.4.2016.
 */
$(function () {
   var listHeight = $('#page').height();
    $('ul').append('<p>Height: '+listHeight+'</p>');
    $('li').width('50%');
    $('li#one').width(125);
    $('li#two').width('75%');
});