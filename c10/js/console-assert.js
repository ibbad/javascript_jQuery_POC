/**
 * Created by ebad on 5.4.2016.
 */
var $form, width, height, area;
$form = $('#calculator');

$('form input[type="text"]').on('blur', function () {
    console.assert(this.value > 10, 'Value less than 10');
});

$('#calculator').on('submit', function (e) {
    e.preventDefault();
    console.log('Submitted...');

    width = $('#width').val();
    height = $('#height').val();
    area = width*height;

    console.assert($.isNumeric(area), 'User entered non-numeric data.');
    $form.append('<p>'+area+'</p>');
})