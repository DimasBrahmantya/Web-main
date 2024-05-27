document.getElementById('sendLocationButton').addEventListener('click', function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError, {
            enableHighAccuracy: true, // Mengaktifkan akurasi tinggi
            timeout: 10000, // Waktu maksimum untuk mendapatkan posisi (dalam milidetik)
            maximumAge: 0 // Jangan menggunakan hasil cache
        });
    } else {
        alert("Geolocation is not supported by this browser.");
    }
});

function showPosition(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    // Buat format string lokasi
    var locationString = "Latitude: " + latitude + ", Longitude: " + longitude;

    // Tampilkan di input
    document.getElementById('location').value = locationString;

    // Buat link ke Google Maps
    var googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    var googleMapsLink = document.getElementById('googleMapsLink');
    googleMapsLink.href = googleMapsUrl;
    googleMapsLink.innerHTML = "Buka di Google Maps";
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            alert("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            alert("The request to get user location timed out.");
            break;
        case error.UNKNOWN_ERROR:
            alert("An unknown error occurred.");
            break;
    }
}
