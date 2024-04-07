const checkForGPS = document.getElementById("checkBox").checked;

function useGPS(){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function(position) {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;

                console.log('Latitude:', latitude);
                console.log('Longitude:', longitude);

                // Do something with the location data
            },
            function(error) {
                console.error('Error getting user location:', error.message);
            }
        );
    } else {
        console.error('Geolocation is not supported by this browser.');
    }
}