/**
 * Created by ebad on 2.4.2016.
 */
var noteInput, noteName, textEntered, target;

noteName = document.getElementById('noteName');
noteInput = document.getElementById('noteInput');

function writeLabel(e){
    if (!e){
        e = window.event;
    }
    target = e.target || e.srcElement;
    textEntered = target.value;
    noteName.textContent = textEntered;
}

function recorderControls(e){
    if (!e){
        e = window.event;
    }
    target = e.target || e.srcElement;
    if (e.preventDefault){
        e.preventDefault();
    } else {
        e.returnValue = false;
    }

    switch(target.getAttribute('data-state')){
        case 'record':
            record(target);
            break;
        case 'stop':
            stop(target);
            break;
        // More buttons, if any
    }

    function record(target){
        target.setAttribute('data-state', 'stop');
        target.textContent = 'stop';
    }

    function stop(target){
        target.setAttribute('data-state', 'record');
        target.textContent = 'record';
    }
}

// Record/Pause controls and functions are defined here.

if (document.addEventListener){
    document.addEventListener('click', function(e){
        recorderControls(e);
    }, false);
    // if input event fires on username, update the label
    noteInput.addEventListener('input', writeLabel, false);
} else {
    document.attachEvent('onclick', function(e){
        recorderControls(e);
    });
    // If keyup event occurs, update the label
    noteInput.attachEvent('onkeyup', writeLabel);
}