
    document.addEventListener('DOMContentLoaded', function () {
      // Retrieve battery level from localStorage or set it to 100%
      let batteryLevel = localStorage.getItem('batteryLevel');

      if (batteryLevel === null) {
        batteryLevel = 100;
        localStorage.setItem('batteryLevel', batteryLevel);
      }

      function updateBatteryStatus() {
        // Update the battery status text
        document.getElementById('batteryStatus').innerText = `Battery Level: ${batteryLevel}%`;

        // Decrease the battery level by 1%
        batteryLevel -= 1;

        // Store the updated battery level in localStorage
        localStorage.setItem('batteryLevel', batteryLevel);

        // Check if the battery is still discharging
        if (batteryLevel < 0) {
          clearInterval(intervalId); // Stop the interval when the battery level is negative
          document.getElementById('batteryStatus').innerText = 'Battery Level: 0%'; // Set to 0% if it goes below
        }
      }

      // Call updateBatteryStatus every minute
      const intervalId = setInterval(updateBatteryStatus, 60000);

      // Initial call to update battery status immediately
      updateBatteryStatus();
    });
  