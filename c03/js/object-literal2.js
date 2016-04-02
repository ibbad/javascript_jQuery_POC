/**
 * Created by ebad on 27.3.2016.
 */
var hotel = {
    name: 'Park',
    rooms: 120,
    booked: 77,
    checkAvailability: function(){
        return this.rooms - this.booked;
    }
};

var elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

var elRooms = document.getElementById('rooms');
elRooms.textContent = hotel.checkAvailability();