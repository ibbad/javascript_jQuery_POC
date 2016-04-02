/**
 * Created by ebad on 28.3.2016.
 */
function getTarget(e){
    if (!e){
        e = window.event;
    } else {
        return e.target || e.srcElement;
    }
}

function itemDone(e){
    // Remove item from the list
    var target, elParent, elGrandParent;
    target = getTarget(e);
    elParent = target.parentNode;
    elGrandParent = target.parentNode.parentNode;
    elGrandParent.removeChild(elParent);

    // Prevent the link from redirecting elsewhere.
    if (e.preventDefault){
        e.preventDefault();
    } else {
        e.returnValue = false;
    }
}


// Setup event listeners to call itemDone on click
var el = document.getElementById('shoppingList');
if (el.addEventListener){
    el.addEventListener('click', function(e){
        itemDone(e);
    }, false);
} else {
    el.attachEvent('onclick', function(e){
        itemDone(e);
    });
}