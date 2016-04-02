/**
 * Created by ebad on 3.4.2016.
 */
$(function(){
   $('h2').hide().slideDown();
    var $li = $('li');
    $li.hide().each(function(index){
        $(this).delay(700*index).fadeIn(700);
    });
    $li.on('click', function(){
        $(this).fadeOut(700);
    })
});