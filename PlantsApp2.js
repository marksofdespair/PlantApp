const input = require('readline-sync');
//let inquireUsername = input.question("What is your name?: ");
const plantInfoClasses = require('./Plant Modules/plant-classes');

var userName = ""
function askForName() {
    const name = input.question("Input your name: ");
    return name;
  }

function displayDay(){
    var dayOfWeekName = new Date().toLocaleString(
    'default', {weekday: 'long'}
    );
}

displayDay();
/*const getSeason = month => {

 
1- Jan    | 7 - July
2- Feb    | 8 - August
3- March  | 9 - September
4- April  | 10 - October
5- May    | 11 - November
6- June   | 12 - December

  if (3 >= month && month <= 5) {
    console.log('spring');
  } else if (6 <= month && month <= 8) { 
    console.log('summer');
  } else if (9 <= month && month <= 11) {
    console.log('autumn');
  } else if (12 === month && month <= 2) {
  console.log('winter');
  } else {
    console.log("Unable to retrieve season.");
  }
}*/

function getSeason(){
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1; // Months are zero-based, so we add 1 to get the actual month.

  if (currentMonth >= 3 && currentMonth <= 5) {
    console.log('It\'s currently spring!');
  } else if (currentMonth >= 6 && currentMonth <= 8) {
    console.log('Is it hot out yet? It\'s currently summer!');
  } else if (currentMonth >= 9 && currentMonth <= 11) {
    console.log('It should be frosting soon... it\'s currently autumn.');
  } else {
    console.log('It\'s currently winter...');
  }
};

getSeason();


console.log(' ');

function dayInfo(dayOfWeekName, userName) {
    if (dayOfWeekName === 'Friday') {
      console.log("It's Friday! Time to water the plants!");
    } else if (dayOfWeekName === 'Wednesday') {
      console.log("It's Wednesday! Time to fertilize.");
    } else {
      console.log(`You do not need to water the plants or fertilize on ${dayOfWeekName}, ${userName}.`);
    }
  
    if (dayOfWeekName === 'Sunday' || dayOfWeekName === 'Friday') {
      console.log("It's Sunday! Check to see if any plants need water.");
    }
  
    if (dayOfWeekName === 'Friday' || dayOfWeekName === 'Wednesday') {
      console.log("You don't need to check the soil today; you have watered recently.");
    }
  
  };
  
  let dayOfWeekName = new Date().toLocaleString('default', { weekday: 'long' });
  let result = dayInfo(dayOfWeekName, userName);
  console.log(result);
  console.log('');
  
//consider refactoring above w/ logical operators in part or entirely? or switch

//Need LOGICAL OPERATORS

let plant1 = new Plant ("Asparagus setaceus", "Asparagus Fern", "High", null, potDescription);
let plant2 = new Plant ("Haworthiopsis attenuata", "Zebra Hawthorn", "High", null, potDescription);
let plant3 = new Plant ("Ravenea rivularis", "Majesty Palm", "High", null, potDescription);
let plant4 = new Plant ("Davallia fejeensis", "Rabbit\'s Foot Fern", "Medium", null, potDescription);
let plant5 = new Plant ("Davallia fejeensis", "Rabbit\'s Foot Fern", "Medium", null, potDescription);
let plant6 = new Plant ("Unknown Wood Fern", "Unknown Wood Fern", "Medium", null, potDescription);

//REFACTORING AS OBJECTS
/*let bluePot = 'fern'
var doesPlantNeedWater = true || false 
if (true) {
    console.log(`The ${bluePot} still needs watering.`)
  } else {
    console.log(`The ${bluePot} does not need watering!`)
  };
let greenPot = 'Asparagus fern'
var doesPlantNeedWater2 = true || false
if (true) {
  console.log(`The ${greenPot} still needs watering.`)
  } else {
  console.log(`The ${greenPot} does not need watering!`)
  };
let greenPotTwo = 'Fairy Fern'
var doesPlantNeedWater3 = true || false
if (true) {
  console.log(`The ${greenPotTwo} still needs watering.`)
  } else {
  console.log(`The ${greenPotTwo} does not need watering!`)
  };
let whitePot = 'Rabbit Fern'
var doesPlantNeedWater4 = true || false
if (false) {
  console.log(`The ${whitePot} still needs watering.`)
  } else {
  console.log(`The ${whitePot} does not need watering!`)
  };
let beigePot = 'Palm Tree'
var doesPlantNeedWater5 = true || false
if (false) {
  console.log(`The ${beigePot} still needs watering.`)
  } else {
  console.log(`The ${beigePot} does not need watering!`)
  };
  */

  //help what was I writing :D
  //This function will check if the current plant has been watered but I'm not sure what the array is for???????? HELP
  //Loop that pushes an update to the shit above? idk what any of that was though
  /*function checkWaterStat() {
    
  }
  function waterAss() {
    let plantsToWater = [plant1, plant2, plant3, plant4, plant5, plant6]

    const ifWatered = `Your ${plantsToWater} has been watered!`
    const ifNotWatered = `Your ${plantsToWater} has not been watered yet!`

    do {
      console.log(ifWatered)
    } while (true === false)
  }

  function runProgram() {
    userName = askForName();
    console.log(`Hello ${userName}! Let's check in on your plants today.`);
  }*/

  function promptUserForPlantData() {
    const Plant = plantInfoClasses; // Get the Plant class from the imported module
    const scienceName = input.question('Enter the scientific name: ');
    const commonName = input.question('Enter the common name: ');
    const lightRequire = input.question('Enter the light requirements: ');
    const waterStat = input.question('Enter the water status: ');
    const potDesc = input.question('Enter pot description: ');
  
    const newPlant = new Plant(scienceName, commonName, lightRequire, waterStat, potDesc);
    console.log('Plant information:', newPlant);
  }

  function runProgram() {
    promptUserForPlantData();
  };