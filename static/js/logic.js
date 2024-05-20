// Part 1: Create the Earthquake Visualization 


// 1 Store our API endpoint as queryUrl.
let queryUrl = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson'

// 2 Create myMap object
let myMap = L.map("map", {
  'center': [37.7749, 1.4194],
  'zoom': 2.5
});

// 3 Create base layer 
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// 4 Perform a GET request to the query URL
d3.json(queryUrl).then(function (data) {
  // 4.a Loop through the data and create circular marker for each earthquake object
  data.features.forEach(element => {
    //4.b Create circular mmarkers: markers should reflect the magnitude of the earthquake by their size and the depth of the earthquake by color.
    let lat = element.geometry.coordinates[1];
    let lon = element.geometry.coordinates[0];
    let depth = element.geometry.coordinates[2];
    // 4.c  Determine the color of the circle based on the depth of the earthquake
    let color = "";
    if (depth > 100) {
      color = "#FADBD8";
    }
    else if (depth > 50) {
      color = "#F5B041";
    }
    else if (depth > 30) {
      color = "#F9E79F";
    }
    else if (depth > 10) {
      color = "#82E0AA";
    }
    else {
      color = "#7FB3D5";
    }
    // 4.d Create circular markers
    let earthquake = L.circleMarker([lat, lon], {
      'fillOpacity': 0.70,
      'fillColor': color,
      'color': "black",
      'opacity': 0.2,
      'weight': 1,
      'radius': element.properties.mag * 5
    }).bindPopup("<h2>" + element.properties.title + "</h2> <hr> <h3>Magnitude: " + element.properties.mag + "</h3> <h3>Depth: " + depth + "</h3>");
    earthquake.addTo(myMap);
  }
  )
})
// 5 Create a legend that will provide context for your map data.
let legend = L.control({ position: "bottomright" });

legend.onAdd = function (map) {
  let div = L.DomUtil.create("div", "info legend");
  div.innerHTML += "<h3>Earth Depth:</h3>";
  div.innerHTML += '<i style="background: #FADBD8"></i><span> 100+</span><br>';
  div.innerHTML += '<i style="background: #F5B041"></i><span> 50-100</span><br>';
  div.innerHTML += '<i style="background: #F9E79F"></i><span> 30-50</span><br>';
  div.innerHTML += '<i style="background: #82E0AA"></i><span> 10-30</span><br>';
  div.innerHTML += '<i style="background: #7FB3D5"></i><span> -10-10</span><br>';
  return div;
};

legend.addTo(myMap);