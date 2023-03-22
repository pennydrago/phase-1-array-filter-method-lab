// Code your solution here

// Function to find matching drivers

function findMatching(driverList, driverName) {
  const driverMatch = driverList.filter(item => item.toLowerCase() === driverName.toLowerCase());
  return driverMatch;
}

// Function to find drivers with beginning matching letters

function fuzzyMatch(driverList, driverName) {
  const driverMatch = driverList.filter(item => item.startsWith(driverName));
  return driverMatch;
}

// Function to match name value

function matchName(driverList, driverName) {
  const driverMatch = driverList.filter(item => item.name === driverName);
  return driverMatch;
}
