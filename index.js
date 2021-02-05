const points = require('./US.json');
const KDBush = require('kdbush');
const geokdbush = require('geokdbush');

// The points file is a JSON encoded array where each item is in the following format:
// [ city, latitude, longitude, state ] ex: ["Manayunk", 40.02456, -75.21407, "PA"]
const index = new KDBush(points, p => p[2], p => p[1], 64);

const nearestCities = (latitude, longitude, maxDistance, maxResults =  5, warningsOff = false) => {
    latitude = typeof latitude !== 'number' ? parseFloat(latitude) : latitude
    longitude = typeof longitude !== 'number' ? parseFloat(longitude): longitude
    if (isNaN(latitude) || isNaN(longitude)) {
        process.emitWarning(`nearestCities: Invalid coordinates: ${latitude}, ${longitude}; returning empty set`);
        return []
    }

    const maxDistanceInMeters = typeof maxDistance === 'number' ? maxDistance / 1000 : maxDistance;
    return geokdbush.around(index, longitude, latitude, maxResults, maxDistanceInMeters).map(city => {
        const [name, lat, lon, state] = city;
        return {name, lat, lon, state}
    })
};

module.exports = nearestCities;
