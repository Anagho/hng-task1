
// function to update current day and time
const updateData = () => {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDayIndex = new Date().getDay();
    const currentDayOfWeek = daysOfWeek[currentDayIndex];

    const currentTime = new Date();
    const formattedTime = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;

    const currentUTCTime = Date.now();

    document.getElementById("current-day").textContent = `Current Day: ${currentDayOfWeek}`;
    document.getElementById("current-utc-time").textContent = `Current UTC Time: ${formattedTime} (ms: ${currentUTCTime})`;
}

// Update data immediately and then every second
updateData();
setInterval(updateData, 1000);