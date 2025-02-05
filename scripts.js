// Pour la carte (index.html)
document.addEventListener('DOMContentLoaded', function () {
    // Initialisation de la carte Leaflet
    var map = L.map('map').setView([34.020882, -6.84165], 13);  // Coordonnées initiales (centre de la carte)

    // Ajout d'un "tile layer" pour afficher la carte
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Données des alertes
    var alerts = [
        {
            lat: 34.020882,
            lon: -6.84165,
            type: 'Warning',
            message: 'Flood warning in the city center. Evacuate low-lying areas immediately.',
            icon: '<i class="fas fa-exclamation-triangle"></i>',
            radius: 500
        },
        {
            lat: 34.021742,
            lon: -6.836092,
            type: 'Emergency',
            message: 'Emergency response needed due to flash flooding near the marina. Avoid the area.',
            icon: '<i class="fas fa-exclamation-circle"></i>',
            radius: 1000
        },
        {
            lat: 34.026309,
            lon: -6.840973,
            type: 'Information',
            message: 'Heavy rain expected in the next few hours. Please stay alert and take precautions.',
            icon: '<i class="fas fa-info-circle"></i>',
            radius: 300
        },
        {
            lat: 34.030944,
            lon: -6.834515,
            type: 'Warning',
            message: 'Landslide warning in the hills to the north. Avoid hiking paths.',
            icon: '<i class="fas fa-exclamation-triangle"></i>',
            radius: 700
        }
    ];

    // Ajout des alertes à la carte
    alerts.forEach(function(alert) {
        var alertIcon = L.divIcon({
            className: 'alert-icon',
            html: alert.icon,
            iconSize: [30, 30]
        });

        var marker = L.marker([alert.lat, alert.lon], { icon: alertIcon }).addTo(map);

        L.circle([alert.lat, alert.lon], {
            color: 'red',
            fillColor: 'red',
            fillOpacity: 0.2,
            radius: alert.radius
        }).addTo(map);

        marker.bindPopup(`
            <strong>${alert.type}</strong>
            <p>${alert.message}</p>
        `);
    });
});

// Pour les alertes (alerts.html)
document.addEventListener('DOMContentLoaded', function () {
    var alertContainer = document.querySelector('.alerts-container');

    if (alertContainer) {
        var alerts = [
            {
                lat: 34.020882,
                lon: -6.84165,
                type: 'Warning',
                message: 'Flood warning in the city center. Evacuate low-lying areas immediately.',
                icon: '<i class="fas fa-exclamation-triangle"></i>'
            },
            {
                lat: 34.021742,
                lon: -6.836092,
                type: 'Emergency',
                message: 'Emergency response needed due to flash flooding near the marina. Avoid the area.',
                icon: '<i class="fas fa-exclamation-circle"></i>'
            },
            {
                lat: 34.026309,
                lon: -6.840973,
                type: 'Information',
                message: 'Heavy rain expected in the next few hours. Please stay alert and take precautions.',
                icon: '<i class="fas fa-info-circle"></i>'
            },
            {
                lat: 34.030944,
                lon: -6.834515,
                type: 'Warning',
                message: 'Landslide warning in the hills to the north. Avoid hiking paths.',
                icon: '<i class="fas fa-exclamation-triangle"></i>'
            }
        ];

        alerts.forEach(function(alert) {
            var alertDiv = document.createElement('div');
            alertDiv.classList.add('alert', `alert-${alert.type.toLowerCase()}`);
            alertDiv.innerHTML = `
                ${alert.icon}
                <div>
                    <h3>${alert.type}!</h3>
                    <p>${alert.message}</p>
                </div>
            `;
            alertContainer.appendChild(alertDiv);
        });
    }
});
