// require leaflet.js
var L = require('leaflet');
 
// specify the path to the leaflet images folder
L.Icon.Default.imagePath = 'node_modules/leaflet/dist/images/';
 
// initialize the map
var map = L.map('map', {
  scrollWheelZoom: false
});
 
// set the position and zoom level of the map
map.setView([47.63, -122.32], 11);
 
// set an attribution string
var attribution = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>';
 
// set the tiles the map will use
var tiles = 'http://{s}.tile.cloudmade.com/f27c8674933c4188a9b5d3222a002db8/997/256/{z}/{x}/{y}.png';
 
// create a tileLayer with the tiles, attribution
var layer = L.tileLayer(tiles, {
  maxZoom: 18,
  attribution: attribution
});
 
// add the tile layer to the map
layer.addTo(map);