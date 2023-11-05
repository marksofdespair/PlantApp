//const input = require('readline-sync');
//let inquireUsername = input.question("What is your name?: ");
const Plant = require('./Plant Modules/plant-classes');
const Name = require('./Plant Modules/request-name-func');

//var userName = "gardner"

function askForName() {
  const name = input.question("Input your name: ");
  return name;
}

function displayDay(){
    var dayOfWeekName = new Date().toLocaleString(
    'default', {weekday: 'long'}
    );
  return dayOfWeekName;
}

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
      console.log(`You do not need to water the plants or fertilize on ${dayOfWeekName}. Good job, ${userName}.`);
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

  window.addEventListener('DOMContentLoaded', function () {
    const addPlantSection = document.getElementById('addPlantSection');
    const plantListSection = document.getElementById('plantListSection');
    const plantForm = document.getElementById('plantForm');
    const plantList = document.getElementById('plantList');
    const addPlantButton = document.getElementById('addPlantButton');
    const showPlantListButton = document.getElementById('showPlantListButton');

    // Initially, hide the "Add Plant" section and show the "Plant List" section
    addPlantSection.style.display = 'none';
    plantListSection.style.display = 'block';

    addPlantButton.addEventListener('click', function () {
        // Show the "Add Plant" section and hide the "Plant List" section
        addPlantSection.style.display = 'block';
        plantListSection.style.display = 'none';
    });

    showPlantListButton.addEventListener('click', function () {
        // Show the "Plant List" section and hide the "Add Plant" section
        addPlantSection.style.display = 'none';
        plantListSection.style.display = 'block';
    });

    plantForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting traditionally

        // Retrieve input values
        const scienceName = document.getElementById('scienceName').value;
        const commonName = document.getElementById('commonName').value;
        const customName = document.getElementById('customName').value;
        const lightRequire = document.getElementById('lightRequire').value;
        const waterStat = document.getElementById('waterStat').value;
        const potDesc = document.getElementById('potDesc').value;

        // Create a new plant instance using the data
        // const newPlant = new Plant(scienceName, commonName, customName, lightRequire, waterStat, potDesc);

        // Add the plant data to the list
        const plantItem = document.createElement('li');
        plantItem.textContent = `Scientific Name: ${scienceName}, Common Name: ${commonName}, Custom Name: ${customName}, Light Requirements: ${lightRequire}, Water Status: ${waterStat}, Pot Description: ${potDesc}`;
        plantList.appendChild(plantItem);

        // Clear the form fields
        plantForm.reset();

        // Show the "Plant List" section after adding a plant
        addPlantSection.style.display = 'none';
        plantListSection.style.display = 'block';
    });
});

window.addEventListener('load', function () {
  const nameForm = document.getElementById('nameForm');
  const nameInput = document.getElementById('name');
  const outputMessage = document.getElementById('outputMessage');

  nameForm.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent the form from submitting the traditional way

      // Call the askForName function to get the user's name
      const name = askForName();

      // Display the user's name
      outputMessage.textContent = `Hello, ${name}!`;

      // You can also send the name to a server or perform other actions here
    }
  });

  /*function promptUserForPlantData() {
    const scienceName = input.question('Enter the scientific name: ');
    const commonName = input.question('Enter the common name: ');
    const customName = input.question('Enter a custom name: ');
    const lightRequire = input.question('Enter the light requirements: ');
    const waterStat = input.question('Enter the water status: ');
    const potDesc = input.question('Enter pot description: ');
  
    const newPlant = new Plant(scienceName, commonName, customName, lightRequire, waterStat, potDesc);
    console.log('Plant information:', newPlant);
  }*/

function runProgram() {
    //const userName = askForName(); // Set the userName  
    //console.log(`Hello ${userName}! Let's check in on your plants today.`);
  
    const dayOfWeekName = displayDay();
    getSeason();
    dayInfo(dayOfWeekName, userName);
    console.log('');
  
    while (true) {
      const answer = input.question('Do you want to add a new plant? (yes/no): ');
      if (answer.toLowerCase() === 'no') {
        break; // Exit the loop if the user enters 'no'
      } else if (answer.toLowerCase() === 'yes') {
        promptUserForPlantData(); // Call the plant data prompt function
      } else {
        console.log('Please enter "yes" or "no".');
      }
    }
  }
