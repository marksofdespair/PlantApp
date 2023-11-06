// Add this code at the beginning of your JavaScript file

window.addEventListener('DOMContentLoaded', function () {
    // This code runs when the page content is loaded

    const addPlantButton = document.getElementById('addPlantButton');
    const addPlantSection = document.getElementById('addPlantSection');
    const nameForm = document.getElementById('nameForm');
    const nameInput = document.getElementById('name');
    const outputMessage = document.getElementById('outputMessage');

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

    nameForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const name = nameInput.value;
        outputMessage.textContent = `Hello, ${name}`;
    });
});

