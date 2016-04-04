/**
 * Created by ebad on 3.4.2016.
 */
var xhr = new XMLHttpRequest();

xhr.onload = function () {
    if (xhr.status === 200){            // works only for a server.
        document.getElementById('content').innerHTML = xhr.responseText;
    }
};

xhr.open('GET', 'data/data.html', true);
xhr.send(null);