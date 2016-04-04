/**
 * Created by ebad on 5.4.2016.
 */
$(function () {
    var times;
    $.ajax({
        beforeSend: function(xhr){
            if (xhr.overrideMimeType){
                xhr.overrideMimeType("application/json");// Set mimetype to prevent errors.
            }
        }
    });

    // Collect data from json file
    function loadTimetable(){
        $.getJSON('data/example.json')
            .done(function(data){
                times = data;
            }).fail(function () {
                $('#event').html('Sorry! Unable to load timetable at the moment.');
            });
    }

    loadTimetable();

    // Load timetable for an event.
    $('#content').on('click', function (e) {
        e.preventDefault();
        var loc = this.id.toUpperCase();

        var newContent = '';
        for (var i=0; i<times[loc]; i++){
            newContent += '<li><span class="time">'+times[loc][i].time+'</span>';
            newContent += '<a href="descriptions.html#';
            newContent += times[loc][i].title.replace(/ /g, '-')+'">';
            newContent += times[loc][i].title + '</a></li>';
        }

        $('#sessions').html('<ul>'+ newContent +'</ul>');

        $('#event a.current').removeClass('current');
        $(this).addClass('current');

        $('#details').text();
    });

    // load description of a session

    $('#content').on('click', function (e) {
        e.preventDefault();
        var fragment = this.href;                       // Title is in href

        fragment = fragment.replace('#', ' #');
        $('#details').load(fragment);

        $('#sessions a.current').removeClass('current');
        $(this).addClass('current');
    });

    // click on primary navigation
    $('nav a').on('click', function (e) {
        e.preventDefault();
        var url = this.href;

        $('nav a.current').removeClass('current');
        $(this).addClass('current');

        $('#container').remove();
        $('#content').load(url + ' #container').hide().fadeIn('slow');
    })
});




































