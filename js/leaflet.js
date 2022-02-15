var osm = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: 'pk.eyJ1IjoiamxvbWJhcmQzMTQxNTkiLCJhIjoiY2t4ZG4wbDQ0M2h0dDJvcG12NWxkN2ljcCJ9.fNlPsPAoumrKbHKgXS2umw'
});

var sat_data = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
          attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          maxZoom: 18,
          id: 'mapbox/satellite-streets-v11',
          tileSize: 512,
          zoomOffset: -1,
          accessToken: 'pk.eyJ1IjoiamxvbWJhcmQzMTQxNTkiLCJhIjoiY2t4ZG4wbDQ0M2h0dDJvcG12NWxkN2ljcCJ9.fNlPsPAoumrKbHKgXS2umw'
});

var bounds = new L.LatLngBounds(new L.LatLng(41.008,-106.710), new L.LatLng(41.813,-104.861));   

var baseMaps = {
    "Streets":osm,
    "Satellite":sat_data
};
