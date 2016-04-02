/**
 * Created by ebad on 3.4.2016.
 */
$(function(){
    $('li').on('click', function(){
        $(this).animate({
            opacity: 0.0,
            paddingLeft: '+=80'
        }, 500, function(){
            $(this).remove();
        });
    });
});