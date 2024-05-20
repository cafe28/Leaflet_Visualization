# Leaflet_Visualization
 
1. First we let queryUrl which this is the earthquake API link that we are retrieving our data from USGS;
2. We then create the map using the function myMap.
3. We start creating the myMap variable, using L.map (leaflet.map) function 
4. We set up the centre of where the map will load first and zoom. 
5. We use d3.json() to fetch JSON data from the URL stored in queryUrl. It returns a promise which, when resolved, provides the data to the function defined inside then().
5. forEach is a method that executes a provided function once for each array element.
6. We create variables for lat long and depth as we will be using them in the future. 
7. We then create an of object list that adds circular markers for each earthquake magnitude and their respective colours: the depth uses the number in the element geometry, to define the magnitude. So, if >100  the colour will be FADBD8 and so on...
8. Now we are adding the legend to our map using onAdd function
9. Inside this function, L.DomUtil.create is used to create a <div> element with the classes "info" and "legend": div will hold the content of the legend.
10. The return function returns the div element, which contains all the legend's HTML content.  legend.addTo(myMap) adds the created legend control to the Leaflet map object myMap.

Bonus
11. We added a special csv to create a legend box and colours. 



