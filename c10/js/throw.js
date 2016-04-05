/**
 * Created by ebad on 5.4.2016.
 */
var width = 12;
var heigh = 'test';

function calculateArea(width, height){
    try{
        var area = width * height;
        if(!isNaN(area)){
            return area;
        } else {
            throw new Error('CalculateArea() received an invalid number');
        }
    } catch (e){
        console.log(e.name + ' ' + e.message);
        return 'Unable to calculate the area.';
    }
}

// Try show the area on the page.
document.getElementById('area').innerHTML = calculateArea(width, height);