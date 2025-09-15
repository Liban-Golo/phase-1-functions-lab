// Code your solution in this file!
const headQuaters = 42;
function distanceFromHqInBlocks(pickup) {
  return Math.abs(pickup - headQuaters);
}

function distanceFromHqInFeet(pickup) {
  const blocks = distanceFromHqInBlocks(pickup);
  return blocks * 264;
}
function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02; 
  } else if (distance > 2000 && distance <= 2500) {
    return 25; 
  } else {
    return 'cannot travel that far';
  }
}