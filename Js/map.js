function initMap() {
    // Crear un nuevo objeto de mapa y especificar las opciones
    var map = new google.maps.Map(document.getElementById('map'), {
       center: {lat: -34.397, lng: 150.644}, // Ubicación latitud y longitud
       zoom: 8 // Nivel de zoom
    });
   
    // Crear un marcador en la ubicación especificada
    var marker = new google.maps.Marker({
       position: {lat: -34.397, lng: 150.644}, // Ubicación latitud y longitud
       map: map // Mapa en el que se mostrará el marcador
    });
   }