const conditionsEl = document.getElementById("conditions");
const temperatureEl = document.getElementById("temperature");
const windspeedEl = document.getElementById("windspeed");
const humidityEl = document.getElementById("humidity");
const precipitationEl = document.getElementById("precipitation");

const lat = 40.7608;
const lon = -111.891;
const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&hourly=relative_humidity_2m,precipitation_probability`;

fetch(url)
    .then((response) => response.json())
    .then((data) => {
        if (data.current_weather && data.hourly) {
            const weather = data.current_weather;
            temperatureEl.textContent = Math.round(weather.temperature);
            windspeedEl.textContent = Math.round(weather.windspeed);
            const weatherCodes = {
                0: "Clear",
                1: "Mainly Clear",
                2: "Partly Cloudy",
                3: "Overcast",
                45: "Fog",
                48: "Depositing Rime Fog",
                51: "Light Drizzle",
                53: "Drizzle",
                55: "Dense Drizzle",
                56: "Freezing Drizzle",
                57: "Dense Freezing Drizzle",
                61: "Slight Rain",
                63: "Rain",
                65: "Heavy Rain",
                66: "Freezing Rain",
                67: "Heavy Freezing Rain",
                71: "Slight Snow",
                73: "Snow",
                75: "Heavy Snow",
                77: "Snow Grains",
                80: "Rain Showers",
                81: "Rain Showers",
                82: "Violent Rain Showers",
                85: "Snow Showers",
                86: "Heavy Snow Showers",
                95: "Thunderstorm",
                96: "Thunderstorm w/ Hail",
                99: "Thunderstorm w/ Heavy Hail",
            };
            conditionsEl.textContent = weatherCodes[weather.weathercode] || "Unknown";

            const currentTime = weather.time || data.current_weather.time;
            const hourlyTimes = data.hourly.time;
            let idx = hourlyTimes.findIndex((t) => t === currentTime);
            if (idx === -1) idx = 0;

            if (data.hourly.relative_humidity_2m) {
                humidityEl.textContent = `${data.hourly.relative_humidity_2m[idx]}%`;
            }
            if (data.hourly.precipitation_probability) {
                precipitationEl.textContent = `${data.hourly.precipitation_probability[idx]}%`;
            }
        }
    })
    .catch((err) => {
        conditionsEl.textContent = "N/A";
        temperatureEl.textContent = "--";
        windspeedEl.textContent = "--";
        humidityEl.textContent = "--";
        precipitationEl.textContent = "--";
    });
