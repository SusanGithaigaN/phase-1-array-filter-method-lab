// Declare an array drivers and assign values to it
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];
// Return all drivers that match the passed in name.
// Return matching drivers if letters match irrespective of case.
// Return an empty array if there is no match.
const findMatching = (drivers, string) => {
  return drivers.filter((name) => {
    return name.toLowerCase() === string.toLowerCase();
  });
};
// fuzzyMatch() returns a driver if beginning provided letters match.
//  Do not return drivers if only middle or ending letters match.
function fuzzyMatch(drivers, string) {
  const newDrivers = drivers.filter((driver) => driver.startsWith(string));
  return newDrivers;
}
fuzzyMatch();
//Function matchName accesses the array to see if the name matches.
function matchName(driver, name) {
  return driver.filter((driver) => {
    return driver.name === name;
  });
}
matchName();
