//function that updates water value
let waterStat = 0;
let lastWateredDay = new Date().getDay(); // Initialize with the current day of the week

function updateWaterStat() {
  const currentDay = new Date().getDay();

  if (currentDay !== lastWateredDay) {
    // It's a new day, so increment the waterStat
    waterStat += 1;
    lastWateredDay = currentDay; // Update the lastWateredDay

    // Check the value of waterStat and display the appropriate message
    if (waterStat >= 3 && waterStat <= 6) {
      console.log("Plant may need watering");
    } else if (waterStat > 6) {
      console.log("Urgent! Check soil!");
    }
  }
}

// Call this function regularly, e.g., every hour, to update waterStat for each new day
setInterval(updateWaterStat, 60 * 60 * 1000); // Update every hour

//export water update function here