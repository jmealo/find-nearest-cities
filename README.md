# find-nearest-us-cities

Searches the nearest cities in The United States using [geokdbush](https://github.com/mourner/geokdbush). Data courtesy [US at geonames.org](http://download.geonames.org/export/dump/). Based on [find-nearest-cities](https://github.com/steffenmllr/find-nearest-cities)

## Installing

```shell
npm install find-nearest-us-cities
```
## Usage

```js
const nearestCities = require('find-nearest-us-cities')

// The Rocky Statue
const latitude = 39.9649;
const longitude = -75.1802;

const cities = nearestCities(latitude, longitude);

/*
[ { 
    name: 'Fairmount',
    lat: 39.97233,
    lon: -75.18101,
    state: 'PA'
  },
  { name: 'Brewerytown',
    lat: 39.97706,
    lon: -75.18185,
    state: 'PA' },
  { name: 'Strawberry Mansion',
    lat: 39.98345,
    lon: -75.18268,
    state: 'PA' },
  { name: 'S.W. Ctr Cty',
    lat: 39.94281,
    lon: -75.18086,
    state: 'PA' },
  { name: 'Point Breeze',
    lat: 39.93345,
    lon: -75.17796,
    state: 'PA' }
]
*/
```

## API

#### nearestCities(longitude, latitude[, maxDistance, maxResults])

Returns an array of the closest points from a given location in order of increasing distance.

- `longitude`: query point longitude.
- `latitude`: query point latitude.
- `maxDistance`: (optional) maximum distance in meters to search within (`Infinity` by default).
- `maxResults`: (optional) maximum number of points to return (`5` by default).

## Data License

[The Dataset](http://download.geonames.org/export/dump/) is published under [Creative Commons Attribution 4.0 International](https://creativecommons.org/licenses/by/4.0/) by *geonames.org*.
