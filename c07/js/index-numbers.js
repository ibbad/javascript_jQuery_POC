/**
 * Created by ebad on 3.4.2016.
 */
$(function(){
    $('li:lt(2)').removeClass('hot');
    $('li').eq(0).addClass('complete');
    $('li:gt(2)').addClass('cool');
});