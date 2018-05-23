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
        const polygonmap = new Polygonmap({polygons, points}, {
            colorOpacity: 0.8
        });

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
            filterEmptyPolygons: true,
            colorOpacity: 0.8
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
            },
            colorOpacity: 0.8
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

ymaps.ready(() => {
    // eslint-disable-next-line no-unused-vars
    const myMap = new ymaps.Map('map-5', {
        center: [37.64, 55.76],
        zoom: 10,
        controls: ['zoomControl', 'typeSelector']
    });

    ymaps.modules.require(['Polygonmap'], (Polygonmap) => {
        const polygonmap = new Polygonmap({polygons, points}, {
            colorScheme: ['#4a148c', '#6a1b9a', '#7b1fa2', '#8e24aa', '#9c27b0', '#ab47bc', '#ba68c8', '#ce93d8', '#e1bee7', '#f3e5f5'],
            colorRanges: 10,
            colorOpacity: 0.8,
            strokeWidth: 1,
            strokeColor: '#666'
        });

        polygonmap.setMap(myMap);
    });
});

ymaps.ready(() => {
    const arr = [100, 200, 300, 400, 500, 600, 700];
    let weightPoints = {};
    weightPoints.features = points.features.map((el) => {
        let rand = Math.floor(Math.random() * arr.length);
        el.properties.weight = arr[rand];

        return el;
    });

    weightPoints.type = 'FeatureCollection';
    // eslint-disable-next-line no-unused-vars
    const myMap = new ymaps.Map('map-6', {
        center: [37.64, 55.76],
        zoom: 10,
        controls: ['zoomControl', 'typeSelector']
    });

    ymaps.modules.require(['Polygonmap'], (Polygonmap) => {
        const polygonmap = new Polygonmap({polygons, points: weightPoints}, {
            colorBy: 'weight',
            colorByWeightType: 'middle',
            colorOpacity: 0.8
        });

        polygonmap.setMap(myMap);
    });
});

ymaps.ready(() => {
    // eslint-disable-next-line no-unused-vars
    const myMap = new ymaps.Map('map-7', {
        center: [37.64, 55.76],
        zoom: 10,
        controls: ['zoomControl', 'typeSelector']
    });

    ymaps.modules.require(['Polygonmap'], (Polygonmap) => {
        const polygonmap = new Polygonmap({polygons, points}, {
            onClick(e) {
                alert('Работает!');
            },
            colorOpacity: 0.8
        });

        polygonmap.setMap(myMap);
    });
});

ymaps.ready(() => {
    // eslint-disable-next-line no-unused-vars
    const myMap = new ymaps.Map('map-9', {
        center: [37.64, 55.76],
        zoom: 10,
        controls: ['zoomControl', 'typeSelector']
    });

    ymaps.modules.require(['Polygonmap'], (Polygonmap) => {
        const polygonmap = new Polygonmap({polygons, points}, {
            balloonContent(object) {
                return `<div>
                        <h3>Велопарковки Москвы</h3>
                        <div>${object.properties.NAME}</div>
                        <div>Количество парковок: <b>${object.properties.pointsCount}</b></div>
                </div>`;
            },
            colorOpacity: 0.8
        });

        polygonmap.setMap(myMap);
    });
});

