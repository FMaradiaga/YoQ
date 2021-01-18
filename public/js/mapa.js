// Initialize and add the map


function initMap() {

    const myLatlng = { "lat": 14.588314287262886, "lng": -87.83685916602111 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 25,
        center: myLatlng,
        mapTypeId: 'satellite'
    });
    $("input#vcomer_coord").val('{ "lat": 14.588314287262886, "lng": -87.83685916602111 }');
    // Create the initial marker.

    marker = new google.maps.Marker({
        map,
        draggable: true,
        animation: google.maps.Animation.DROP,
        position: myLatlng,
    });

    // Configure the click listener.
    map.addListener("click", (mapsMouseEvent) => {
        // Close the current InfoWindow.
        infoWindow.close();
        // Create a new InfoWindow.
        infoWindow = new google.maps.InfoWindow({
            position: mapsMouseEvent.latLng
        });
        //infoWindow.setContent(JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2)    );

        $("input#vcomer_coord").val(JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2));

        //infoWindow.open(map);
    });
    // The marker, positioned at Uluru
    var marker;

    google.maps.event.addListener(map, 'click', function (event) {
        placeMarker(event.latLng);
    });

    let infoWindow = new google.maps.InfoWindow({
        content: "Click the map to get Lat/Lng!",
        position: myLatlng,
    });

    function placeMarker(location) {

        if (marker == null) {
            marker = new google.maps.Marker({
                position: location,
                map: map
            });
        }
        else {
            marker.setPosition(location);
        }
    }

    $("#find_btn").click(function () {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
              //  infoWindow = new google.maps.InfoWindow({ map: map });
                let pos = { lat: position.coords.latitude, lng: position.coords.longitude };
               // infoWindow.setPosition(pos);
               // infoWindow.setContent("<label class='black-text'> Ubicación encontrada <br />Lat : " + position.coords.latitude + " </br>Lang :" + position.coords.longitude + '</label>');
                map.panTo(pos);
              //      $("input#vcomer_coord").val(pos.toJSON());

                marker = new google.maps.Marker({
                    position: pos,
                    map: map
                });
            });
            
        } else {
            console.log("Browser doesn't support geolocation!");
        }
    });
  

    let button = document.getElementById("get-location");
    let latText = document.getElementById("latitude");
    let longText = document.getElementById("longitude");

    button.addEventListener("click", function () {
        navigator.geolocation.getCurrentPosition(function (position) {
            let lat = position.coords.latitude;
            let long = position.coords.longitude;

            latText.innerText = lat.toFixed(2);
            longText.innerText = long.toFixed(2);
        });
    });

}
