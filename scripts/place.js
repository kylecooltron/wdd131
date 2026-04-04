const today = new Date();
document.getElementById("currentyear").textContent = `©${today.getFullYear()}`;
document.getElementById("lastModified").textContent = `Last updated: ${document.lastModified}`;

function calculateWindChill(temperatureF, windSpeedMph) {
    return (
        35.74 +
        0.6215 * temperatureF -
        35.75 * Math.pow(windSpeedMph, 0.16) +
        0.4275 * temperatureF * Math.pow(windSpeedMph, 0.16)
    );
}

function updateWindChill() {
    const temperature = 46; // °F
    const windSpeed = 10; // mph
    const windChillElement = document.getElementById("windchill");

    if (temperature <= 50 && windSpeed > 3) {
        const chill = calculateWindChill(temperature, windSpeed);
        windChillElement.textContent = `${Math.round(chill)}°F`;
    } else {
        windChillElement.textContent = "N/A";
    }
}

updateWindChill();
