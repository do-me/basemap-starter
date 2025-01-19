//const { invoke } = window.__TAURI__.core;

import maplibregl from 'maplibre-gl';
import * as pmtiles from 'pmtiles';
import style from './style.json'; // Import style.json
import 'maplibre-gl/dist/maplibre-gl.css'; 

let protocol = new pmtiles.Protocol({ metadata: true });
maplibregl.addProtocol("pmtiles", protocol.tile);

var map = new maplibregl.Map({
container: 'map',
style: style, // Use the imported style
center: [7.420788, 43.73704],
zoom: 15,
});