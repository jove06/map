import { data } from "../data/data";

// SPACE DATA EXERCISE 1
// Return an array of all Planets' names
// Return example: ['name1', 'name2', ... , 'nameN']

export function getPlanetNames(data) {
    var planets = data.planets.filter(function(planet){return planet.isPlanet === true});
    var planetNames = planets.map(function(planet){return planet.name});
    return planetNames;

    
    
}

console.log(getPlanetNames)




// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-1"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
