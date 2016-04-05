/**
 * Created by ebad on 5.4.2016.
 */
var $form, width, height, area;
$form = $('#calculator');

$('#calculator').on('submit', function (e) {
    e.preventDefault();
    console.log('Submitted...');

    width = $('#width').val();
    height = $('#height').val();
    area = (width*height);
    if(area<100){
        debugger;               // A breakpoint is set if the developer tools are open.
    }
    $form.append('<p>'+area+'</p>');
});