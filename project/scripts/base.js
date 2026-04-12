const today = new Date();
document.getElementById("currentyear").innerHTML = `©${today.getFullYear()}`;
document.getElementById("lastModified").innerHTML = document.lastModified;

// Save so that they are available to the map AND for recording catches.
// Normally I wouldn't have redundant code like this, but it's an easy patch for now.
const markers = JSON.parse(localStorage.getItem("markers")) || [];
const lakes = [
    { name: "Strawberry Reservoir", coords: [40.17, -111.05] },
    { name: "Utah Lake", coords: [40.2057, -111.8137] },
    { name: "Flaming Gorge", coords: [40.92, -109.43] },
    { name: "Scofield Reservoir", coords: [39.7738, -111.1521] },
];
lakes.forEach((lake) => {
    saveMarker(lake.coords, lake.name);
});
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
