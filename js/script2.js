function calculateMobileCarbonFootprint() {
    // Get the values of mobile usage hours for day, week, and month
    let dailyHours = parseFloat(document.getElementById("dailyMobileUsage").value);
    let weeklyHours = parseFloat(document.getElementById("weeklyMobileUsage").value);
    let monthlyHours = parseFloat(document.getElementById("monthlyMobileUsage").value);

    // Calculation of the carbon footprint for mobile devices
    // Example value for carbon footprint per hour of usage: 0.01 kilograms (you can adjust this)
    let carbonFootprintPerHour = 0.01;

    // Calculation of the carbon footprint for each period
    let dailyCarbonFootprint = dailyHours * carbonFootprintPerHour;
    let weeklyCarbonFootprint = weeklyHours * carbonFootprintPerHour * 7; // Multiply by 7 to get weekly footprint
    let monthlyCarbonFootprint = monthlyHours * carbonFootprintPerHour * 30; // Multiply by 30 to get monthly footprint

    // Calculation of the number of trees that can offset the carbon footprint
    // Each tree can absorb approximately (depending on the type of tree species) 22.6 kilograms of CO2 per year
    let treesPlantedDaily = dailyCarbonFootprint / 22.6;
    let treesPlantedWeekly = weeklyCarbonFootprint / 22.6;
    let treesPlantedMonthly = monthlyCarbonFootprint / 22.6;

    // Display the result   
    let resultElement = document.getElementById("mobileResult");
    resultElement.innerHTML = "Your carbon footprint from mobile device usage:<br>";
    resultElement.innerHTML += "Daily: " + dailyCarbonFootprint.toFixed(2) + " kilograms of CO2<br>";
    resultElement.innerHTML += "Weekly: " + weeklyCarbonFootprint.toFixed(2) + " kilograms of CO2<br>";
    resultElement.innerHTML += "Monthly: " + monthlyCarbonFootprint.toFixed(2) + " kilograms of CO2<br><br>";
    resultElement.innerHTML += "To help build a better environment, consider planting trees:<br><br>";
    resultElement.innerHTML += "Daily: plant around " + Math.ceil(treesPlantedDaily) + " tree(s) per day<br>";
    resultElement.innerHTML += "Weekly: plant around " + Math.ceil(treesPlantedWeekly) + " tree(s) per week<br>";
    resultElement.innerHTML += "Monthly: plant around " + Math.ceil(treesPlantedMonthly) + " tree(s) per month<br>";
}






