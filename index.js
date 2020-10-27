const data = require('./US.json');
const distance = require('@turf/distance').default;
const { point } = require('@turf/helpers');
const kdbush = require('kdbush');
const geokdbush = require('geokdbush');
const index = kdbush(data, (p) => p[1], (p) => p[2]);

const isFloat = (n) => Number(n) === n && n % 1 !== 0;
const nearestCities = (latitude, longitude, maxDistance, maxResults =  5) => {
    if (!isFloat(latitude)) throw new Error('`latitude` has to be a Float');
    if (!isFloat(longitude)) throw new Error('`longitude` has to be a Float');

    const pointFrom = point([latitude, longitude]);
    const maxDistanceInMeters = maxDistance ? maxDistance / 1000 : maxDistance;
    return geokdbush.around(index, latitude, longitude, maxResults, maxDistanceInMeters).map(city => {
        const pointTo = point([city.lat, city.lon]);
        city.distance = Math.ceil(distance(pointFrom, pointTo, { units: 'meters' }));
        const [name, lat, lon, state] = city;
        return {name, lat, lon, state}

    }).sort(s => s.distance)
};

module.exports = nearestCities;
