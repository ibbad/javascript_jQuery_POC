/**
 * Created by ebad on 5.4.2016.
 */
$('#register').on('submit', function (e) {
    e.preventDefault();
    var details = $('#register').serialize();
    $.post('register.php', details, function (data) {
        $('#register').html(data);      // Display result in #register.
    });
});