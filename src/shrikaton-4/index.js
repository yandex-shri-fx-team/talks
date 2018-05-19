import './index.css';
import 'ymaps-polygonmap/src/Polygonmap';
import points from '../data/bikeparking-moscow.geojson';
import polygons from '../data/moscow-mo.geojson';

ymaps.ready(() => {
    // eslint-disable-next-line no-unused-vars
    const myMap = new ymaps.Map('map-1', {
        center: [37.64, 55.76],
        zoom: 10,
        controls: ['zoomControl', 'typeSelector']
    });

    ymaps.modules.require(['Polygonmap'], (Polygonmap) => {
        const polygonmap = new Polygonmap({polygons, points});

        polygonmap.setMap(myMap);
    });
});

ymaps.ready(() => {
    // eslint-disable-next-line no-unused-vars
    const myMap = new ymaps.Map('map-2', {
        center: [37.64, 55.76],
        zoom: 10,
        controls: ['zoomControl', 'typeSelector']
    });

    ymaps.modules.require(['Polygonmap'], (Polygonmap) => {
        const polygonmap = new Polygonmap({polygons, points}, {
            filterEmptyPolygons: true
        });

        polygonmap.setMap(myMap);
    });
});

ymaps.ready(() => {
    // eslint-disable-next-line no-unused-vars
    const myMap = new ymaps.Map('map-3', {
        center: [37.64, 55.76],
        zoom: 10,
        controls: ['zoomControl', 'typeSelector']
    });

    ymaps.modules.require(['Polygonmap'], (Polygonmap) => {
        const polygonmap = new Polygonmap({polygons, points}, {
            filter: function (object) {
                return object.properties.pointsCount > 10;
            }
        });

        polygonmap.setMap(myMap);
    });
});

ymaps.ready(() => {
    // eslint-disable-next-line no-unused-vars
    const myMap = new ymaps.Map('map-4', {
        center: [37.64, 55.76],
        zoom: 10,
        controls: ['zoomControl', 'typeSelector']
    });

    ymaps.modules.require(['Polygonmap'], (Polygonmap) => {
        const polygonmap = new Polygonmap({polygons, points}, {
            colorScheme: 'summer',
            strokeWidth: 1,
            strokeColor: '#666',
            colorOpacity: 0.8
        });

        polygonmap.setMap(myMap);
    });
});

