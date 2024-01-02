window.addEventListener('DOMContentLoaded', function () {
    // This code runs when the page content is loaded

    const addPlantButton = document.getElementById('addPlantButton');
    const addPlantSection = document.getElementById('addPlantSection');
    const nameForm = document.getElementById('nameForm');
    const nameInput = document.getElementById('name');
    const outputMessage = document.getElementById('outputMessage');
    const monthDisplay = document.getElementById('monthDisplay');
    const waterRequirementsDisplay = document.getElementById('waterRequirementsDisplay');

    // Hide the "Add a New Plant" section initially
    addPlantSection.style.display = 'none';
    plantListSection.style.display= 'none';

    addPlantButton.addEventListener('click', function () {
        // This code runs when the "Add a Plant" button is clicked
        // Toggle the visibility of the "Add a New Plant" section
        if (addPlantSection.style.display === 'none') {
            addPlantSection.style.display = 'block';
        } else {
            addPlantSection.style.display = 'none';
        }
    });

    showPlantListButton.addEventListener('click', function () {
        // This code runs when the "Show Plant List" button is clicked
        // Toggle the visibility of the "Plant List" section
        if (plantListSection.style.display === 'none') {
            plantListSection.style.display = 'block';
        } else {
            plantListSection.style.display = 'none';
        }
    });

    // Function to get the current month
    function getCurrentMonth() {
        const currentDate = new Date();
        const options = { month: 'long', year: 'numeric' };
        return currentDate.toLocaleDateString(undefined, options);
    }

    // Function to determine water requirements based on the current month
    function getWaterRequirements(month) {
        if (month >= 3 && month <= 5) {
            return 'It\'s spring- consider checking the soil moisture once a week!';
        } else if (month >= 6 && month <= 10) {
            return 'It\'s summer- consider checking the soil moisture twice a week!';
        } else {
            return 'It\'s winter- consider checking the soil moisture every other week!';
        }
    }

    // Function to update the month and water requirements display
    function updateMonthAndWaterRequirements() {
        const currentMonth = getCurrentMonth();
        const waterRequirements = getWaterRequirements(currentMonth);

        monthDisplay.textContent = `Current Date: ${currentMonth}`;
        waterRequirementsDisplay.textContent = `Water Requirements: ${waterRequirements}`;
    }

    nameForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const name = nameInput.value;
        outputMessage.textContent = `Hello, ${name}`;
    });

    updateMonthAndWaterRequirements();
});

