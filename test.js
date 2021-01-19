const test = require('tape');
const nearestCity = require('.');

test('find-nearest-cities', function (t) {

    t.test('nearest philadelphia city', function(t) {
        t.plan(3);

        console.time("benchmark");
        const latitude = 40.02456;
        const longitude = -75.21407;
        const cities = nearestCity(latitude, longitude, undefined, 5);
        console.timeEnd("benchmark");

        t.equal(cities[0].name, 'Manayunk', 'Philadelphia (NAME) should be the first item');
        t.equal(cities[1].name, 'Wissahickon', 'Philadelphia (NAME) should be the first item');
        t.equal(cities.length, 5, 'Should find at least 5 cities for Philadelphia.');
        t.end();
    });

    t.test('divided city: Texarkana, AR', function(t) {
        t.plan(5);

        console.time("benchmark");
        const latitude = 33.433056;
        const longitude = -94.020556;
        const cities = nearestCity(latitude, longitude, undefined, 5);
        console.timeEnd("benchmark");

        t.equal(cities[0].state, 'AR', 'Texarkana, AR (STATE) should be the first item');
        t.equal(cities[0].name, 'Texarkana', 'Texarkana, AR (NAME) should be the first item');
        t.equal(cities[1].state, 'TX', 'Texarkana, TX (STATE) should be the second item');
        t.equal(cities[1].name, 'Texarkana', 'Texarkana, TX (NAME) should be the second item');
        t.equal(cities.length, 5, 'Should find at least 5 cities for Texarkana.');
        t.end();
    });

    t.test('divided city: Texarkana, TX', function(t) {
        t.plan(5);

        console.time("benchmark");
        const latitude = 33.437222;
        const longitude = -94.0675;
        const cities = nearestCity(latitude, longitude, undefined, 5);
        console.timeEnd("benchmark");

        t.equal(cities[0].state, 'TX', 'Texarkana, TX (STATE) should be the first item');
        t.equal(cities[0].name, 'Texarkana', 'Texarkana, TX (NAME) should be the first item');
        t.equal(cities[1].state, 'AR', 'Texarkana, AR (STATE) should be the second item');
        t.equal(cities[1].name, 'Texarkana', 'Texarkana, AR (NAME) should be the second item');
        t.equal(cities.length, 5, 'Should find at least 5 cities for Texarkana.');
        t.end();
    });

    t.test('nearest city for Bird in Hand', function(t) {
        t.plan(1);

        console.time("benchmark");
        const latitude = 40.03871;
        const longitude = -76.18218;
        const cities = nearestCity(latitude, longitude, undefined, 1);
        console.timeEnd("benchmark");

        const city = cities[0]

        t.equal(city.name, 'Bird in Hand', 'Bird in Hand (NAME) should be the first item');
        t.end();
    });

});
