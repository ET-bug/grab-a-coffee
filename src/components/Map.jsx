import { useEffect } from 'react';

//import all ESM modules that OpenLayers requires
import Map from 'ol/Map.js';
import OSM from 'ol/source/OSM.js';
import TileLayer from 'ol/layer/Tile.js';
import View from 'ol/View.js';

//converts Longitudinal and Latitude coordinates to meters which OpenLayers needs
import { fromLonLat } from 'ol/proj.js';

//import map style - linked to an OpenLayers CSS for certain components like zoom in/out
import './map-style.css';



function MapDisplay(neighbourhoodLonLat,zoom) {
    useEffect(() => {
        
        const newCenter = fromLonLat(neighbourhoodLonLat);
        
        const map = new Map({
            target: 'map',
            layers: [
                new TileLayer({
                    source: new OSM(),
                }),
            ],
            view: new View({
                center: newCenter,
                zoom: zoom,
            }),
        });

        return() => {
            map.setTarget(undefined);
        };
    }, []);

    return null;
}

export default MapDisplay;