document.addEventListener('DOMContentLoaded', function () {
    // Initialize the map
    var map = L.map('map').setView([51.505, -0.09], 13); // Default center (you can change this)

    // Add the tile layer (background map)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Attempt to get the user's current location
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var userLat = position.coords.latitude;
            var userLon = position.coords.longitude;

            // Center the map on the user's location
            map.setView([userLat, userLon], 13);

            // Add a marker for the user's location
            L.marker([userLat, userLon]).addTo(map)
                .bindPopup("You are here!")
                .openPopup();
        }, function() {
            // Handle errors (e.g., user denied location access)
            alert("Unable to retrieve your location.");
        });
    } else {
        alert("Geolocation is not supported by this browser.");
    }
});
