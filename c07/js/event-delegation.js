/**
 * Created by ebad on 3.4.2016.
 */
$(function(){
    var listItem, itemStatus, eventType;

    $('ul').on(
        'click mouseover',
        ':not(#four)',
        {status: 'important'},                          // Extra data.
        function(e){
            listItem = 'Item: ' + e.target.textContent + '<br/>';
            itemStatus = 'Status: ' + e.target.status + '<br/>';
            eventType = 'Event: '+ e.type;
            $('#notes').html(listItem+itemStatus+eventType);
        }
    );
});