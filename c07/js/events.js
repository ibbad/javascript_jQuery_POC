/**
 * Created by ebad on 3.4.2016.
 */
$(function(){
    var ids = '';
    var $listItems = $('li');

    $listItems.on('mouseover click', function(){
        ids = this.id;
        $listItems.children('span').remove();
        $(this).append(' <span class="priority">'+ ids +'</span>');
    });

    $listItems.on('mouseout', function(){
       $(this).children('span').remove();
    });

});