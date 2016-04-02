/**
 * Created by ebad on 3.4.2016.
 */
$(function () {
    $('li:contains("pine")').text('almonds');
    $('li.hot').html(function(){
        return '<em>'+$(this).text +'</em>';
    });
    $('li#one').remove();
})