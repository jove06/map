/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
 
  let asteroidYearCount = {}; 
  let maxYear = null;
  let maxCount = 0;
  for (let discovery of data.asteroids) {
    let year = discovery.discoveryYear;
    if (!asteroidYearCount[year]) {
      asteroidYearCount[year] = 0;
    }
    asteroidYearCount[year]++;
    if (asteroidYearCount[year] > maxCount) {
      maxCount = asteroidYearCount[year];
      maxYear = year;
    }
  }
  return maxYear;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
