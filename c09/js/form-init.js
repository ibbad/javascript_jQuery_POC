/**
 * Created by ebad on 5.4.2016.
 */
$(function(){
    $('#arrival').datepicker();

    var $amount = $('#amount');
    var $range = $('#price-range');

    $('#price-range').slider({
        range: true,
        min: 0,
        max: 400,
        values: [200, 300],
        slide: function(event, ui){
            $amount.val('$' + ui.values[0] + ' - $' + ui.values[1]);
        }
    });

    // Set the initial price range
    $amount
        .val('$' + $range.slider('values', 0)
        + ' - $' + $range.slider('values', 1))
});