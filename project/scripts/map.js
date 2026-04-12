import { saveFeedItem } from "./feed-module.js";

const lakes = [
    { name: "Strawberry Reservoir", coords: [40.17, -111.05] },
    { name: "Utah Lake", coords: [40.2057, -111.8137] },
    { name: "Flaming Gorge", coords: [40.92, -109.43] },
    { name: "Scofield Reservoir", coords: [39.7738, -111.1521] },
];
const markers = JSON.parse(localStorage.getItem("markers")) || [];

// elements
const map = L.map("map").setView([39.32098, -111.09373], 7);
const locationName = document.getElementById("save-location-input");

// vars
let clickedLatLng = null;

map.invalidateSize();
L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}", {
    maxZoom: 19,
}).addTo(map);

lakes.forEach((lake) => {
    L.marker(lake.coords).addTo(map).bindPopup(lake.name);
});

markers.forEach((marker) => {
    L.marker(marker.pos).bindPopup(marker.name).addTo(map);
});

map.getContainer().addEventListener("contextmenu", function (e) {
    e.preventDefault();
});

map.on("click", () => {
    document.getElementById("map-menu").style.display = "none";
});

function showMenu(e) {
    clickedLatLng = e.latlng;
    const menu = document.getElementById("map-menu");
    menu.style.left = e.originalEvent.pageX + "px";
    menu.style.top = e.originalEvent.pageY + "px";
    menu.style.display = "block";
}

map.on("contextmenu", function (e) {
    locationName.value = "";
    showMenu(e);
    locationName.focus();
});

document.getElementById("save-location-input").addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        e.preventDefault();
        document.getElementById("add-marker").click();
    }
});

document.getElementById("add-marker").onclick = function () {
    if (!clickedLatLng) return;

    const locationSaveName = locationName.value || "Unnamed Spot";

    if (!saveMarker(clickedLatLng, locationSaveName)) {
        alert(`A location with name ${locationSaveName} already exists.`);
        return;
    }

    L.marker(clickedLatLng).addTo(map).bindPopup(locationSaveName).openPopup();
    saveFeedItem("📍New Spot Saved", `${locationSaveName}`);

    document.getElementById("map-menu").style.display = "none";
};

function saveMarker(clickedLatLng, locationName) {
    const exists = markers.some((m) => m.name.toLowerCase() === locationName.toLowerCase());
    if (exists) return false;

    markers.push({
        pos: clickedLatLng,
        name: locationName,
    });

    localStorage.setItem("markers", JSON.stringify(markers));
    return true;
}

const rightClickMessage = document.getElementById("right-click-message");

function updateMessage() {
    if (window.innerWidth < 800) {
        rightClickMessage.textContent = "Tap and hold";
    } else {
        rightClickMessage.textContent = "Right click";
    }
}

updateMessage();
window.addEventListener("resize", updateMessage);
