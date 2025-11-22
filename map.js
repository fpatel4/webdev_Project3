function init() {
    var mapContainer = document.getElementById('map');
    var location = new google.maps.LatLng(25.19721, 55.27437);
    var mapOptions = {
        center: location,
        zoom: 13,
        maxZoom: 15,
        mapTypeId: google.maps.MapTypeId.TERRAIN,
        mapTypeControlOptions: {
            position: google.maps.ControlPosition.BOTTOM_CENTER
        }
    };

  var map = new google.maps.Map(mapContainer, mapOptions);

  var markerLocation = new google.maps.LatLng(25.202981, 55.238219);
  var marker = new google.maps.Marker({
    position: markerLocation,
    map: map,
    icon: { 
      url: 'images/sun-icon.png', 
      scaledSize: new google.maps.Size(50, 50) 
    },
    title: 'Beach'
  });

  var beachPath = [
    location,
    markerLocation
  ];

  var polyLine = new google.maps.Polyline({
    path: beachPath,
    geodesic: true,
    strokeColor: '#ff3b68',
    strokeOpacity: 1.0,
    strokeWeight: 2
  });

  polyLine.setMap(map);

  var button = document.getElementById('questions');
  var myEmail = "fpatel10@hawk.illinoistech.edu";

  function displayAlert() {
    alert("If you have questions, contact me at:\n" + myEmail);
  }

  button.addEventListener('click', displayAlert);
}

google.maps.event.addDomListener(window, 'load', init);