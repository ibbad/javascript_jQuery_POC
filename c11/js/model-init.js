/**
 * Created by ebad on 5.4.2016.
 */
(function(){
    var $content = $('#share-options').detach();

    $('#share').on('click', function () {
        modal.open({content:$content, width:340, height:300});
    })
}());