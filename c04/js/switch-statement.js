/**
 * Created by ebad on 27.3.2016.
 */
var msg;
var level=2;

switch (level){
    case 1:
        msg = 'Good luck on the first test.';
        break;
    case 2:
        msg = 'Second of three - keep going!';
        break;
    case 3:
        msg = 'Final round, almost there!';
        break;

    default:
        msg = 'Good luck!';
        break;
}

var el = document.getElementById('answer');
el.textContent = msg;