/**
 * Created by ebad on 5.4.2016.
 */
var $form = $('#calculator');

$form.on('submit', function (e) {
    e.preventDefault();
    console.log('Clicked...');

    var width, height, area;
    width = $('#width').val();
    height = $('#height').val();

    area = width*height;

    console.group('Area calculations');
    console.info('Width ', width);
    console.info('Height ', height);
    console.log(area);
    console.groupEnd();

    $form.append('<p>'+area+'</p>');
});