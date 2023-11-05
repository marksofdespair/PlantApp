window.addEventListener('DOMContentLoaded', function () {
    // Hide the "Add a New Plant" section initially
    function askForName() {
        const nameInput = document.getElementById('name'); // Assuming you have an input field with id "name" in your HTML
        const name = nameInput.value;
        return name;
    }
    
    function displayDay() {
        const dayOfWeekName = new Date().toLocaleString('default', { weekday: 'long' });
        return dayOfWeekName;
    }
    
    function getSeason() {
        const currentDate = new Date();
        const currentMonth = currentDate.getMonth() + 1; // Months are zero-based, so add 1 to get the actual month.
    
        if (currentMonth >= 3 && currentMonth <= 5) {
            // You can display messages in the HTML document like this:
            document.getElementById('seasonMessage').textContent = "It's currently spring!";
        } else if (currentMonth >= 6 && currentMonth <= 8) {
            document.getElementById('seasonMessage').textContent = "Is it hot out yet? It's currently summer!";
        } else if (currentMonth >= 9 && currentMonth <= 11) {
            document.getElementById('seasonMessage').textContent = "It should be frosting soon... it's currently autumn.";
        } else {
            document.getElementById('seasonMessage').textContent = "It's currently winter...";
        }
    }
    
    function dayInfo(dayOfWeekName, userName) {
        const outputMessage = document.getElementById('outputMessage');
        if (dayOfWeekName === 'Friday') {
            outputMessage.textContent = "It's Friday! Time to water the plants!";
        } else if (dayOfWeekName === 'Wednesday') {
            outputMessage.textContent = "It's Wednesday! Time to fertilize.";
        } else {
            outputMessage.textContent = `You do not need to water the plants or fertilize on ${dayOfWeekName}. Good job, ${userName}.`;
        }
    
        if (dayOfWeekName === 'Sunday' || dayOfWeekName === 'Friday') {
            outputMessage.textContent = "It's Sunday! Check to see if any plants need water.";
        }
    
        if (dayOfWeekName === 'Friday' || dayOfWeekName === 'Wednesday') {
            outputMessage.textContent = "You don't need to check the soil today; you have watered recently.";
        }
    }
    
    window.addEventListener('DOMContentLoaded', function () {
        const nameForm = document.getElementById('nameForm');
        const outputMessage = document.getElementById('outputMessage');
        const addPlantSection = document.getElementById('addPlantSection'); // Added this line
    
        nameForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const name = askForName();
            outputMessage.textContent = `Hello, ${name}`;
    
            // Toggles the visibility of the "Add a New Plant" section
            if (addPlantSection.style.display === 'none') {
                addPlantSection.style.display = 'block';
            } else {
                addPlantSection.style.display = 'none';
            }
        });
    });
});

