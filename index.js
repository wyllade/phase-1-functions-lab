// Code your solution in this file.
function distanceFromHqInBlocks(currentStreet) {
    return Math.abs(currentStreet - 42);
  }
  
  function distanceFromHqInFeet(currentStreet) {
    return distanceFromHqInBlocks(currentStreet) * 264;
  }
  
  function distanceTravelledInFeet(startStreet, destinationStreet) {
    return Math.abs(destinationStreet - startStreet) * 264;
  }
  
  function calculatesFarePrice(startStreet, destinationStreet) {
    const totalFeet = distanceTravelledInFeet(startStreet, destinationStreet);
    
    if (totalFeet > 2500) {
      return 'cannot travel that far';
    } else if (totalFeet > 2000) {
      return 25;
    } else if (totalFeet > 400) {
      return (totalFeet - 400) * 0.02;
    } else {
      return 0;
    }
  }
  