/**
 * Created by ebad on 27.3.2016.
 */
var hotel = {
    name: 'Park',
    rooms: 120,
    booked: 77
};

// Adding properties.
hotel.gym = true;
hotel.pool = true;
// Removing properties.
delete hotel.booked;

var elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

var elPool = document.getElementById('pool');
elPool.className = 'Pool: '+hotel.pool;

var elGym = document.getElementById('gym');
elGym.className = 'Gym: '+hotel.gym;