/**
 * Created by ebad on 3.4.2016.
 */
var xhr = new XMLHttpRequest();

xhr.onload = function(){
    if (xhr.status === 200){
        responseObject = JSON.parse(xhr.responseText);

        var newContent = '';
        for (var i=0; i< responseObject.events.length; i++){
            newContent += '<div class="event">';
            newContent += '<img src="' + responseObject.event[i].map +'"';
            newContent += 'alt="' + responseObject.event[i].location +'"';
            newContent += '<p><b>' + responseObject.event[i].location +'</b></br>';
            newContent += responseObject.events[i].date + '</p>';
            newContent += '</div>';
        }

        // update the page with new content
        document.getElementById('content').innerHTML = newContent;
    }
};

xhr.open('GET', 'data/data.json', true);            // Prepare the request.
xhr.send(null);                                     // Send the request.