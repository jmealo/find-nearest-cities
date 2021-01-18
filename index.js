const points = require('./US.json');
const KDBush = require('kdbush');
const geokdbush = require('geokdbush');

// The points file is a JSON encoded array where each item is in the following format:
// [ city, latitude, longitude, state ] ex: ["Manayunk", 40.02456, -75.21407, "PA"]
const index = new KDBush(points, p => p[2], p => p[1], 64);

const isFloat = (n) => Number(n) === n && n % 1 !== 0;
const nearestCities = (latitude, longitude, maxDistance, maxResults =  5) => {
    if (!isFloat(latitude)) throw new Error('`latitude` has to be a Float');
    if (!isFloat(longitude)) throw new Error('`longitude` has to be a Float');

    const maxDistanceInMeters = maxDistance ? maxDistance / 1000 : maxDistance;
    return geokdbush.around(index, longitude, latitude, maxResults, maxDistanceInMeters).map(city => {
        const [name, lat, lon, state] = city;
        return {name, lat, lon, state}
    })
};

module.exports = nearestCities;
