/**
 * Created by ebad on 27.3.2016.
 */
function Hotel(name, rooms, booked){
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.checkAvailability = function(){
        return this.rooms - this.booked;
    };
}

var quayHotel = new Hotel('Quay', 40, 25);
var parkHotel = new Hotel('Park', 40, 25);

var details1 = quayHotel.name+ ' rooms: ';
    details1 += quayHotel.checkAvailability();

var elHotel1 = document.getElementById('hotel1');
elHotel1.textContent = details1

var details2 = parkHotel.name + ' rooms: ';
    details2 += parkHotel.checkAvailability();


var elHotel2 = document.getElementById('hotel2');
elHotel2.textContent = details2