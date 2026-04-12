const species = [
    { id: "rainbow_trout", name: "Rainbow Trout" },
    { id: "brown_trout", name: "Brown Trout" },
    { id: "brook_trout", name: "Brook Trout" },
    { id: "cutthroat_trout", name: "Cutthroat Trout" },
    { id: "lake_trout", name: "Lake Trout (Mackinaw)" },
    { id: "kokanee_salmon", name: "Kokanee Salmon" },
    { id: "largemouth_bass", name: "Largemouth Bass" },
    { id: "smallmouth_bass", name: "Smallmouth Bass" },
    { id: "carp", name: "Carp" },
    { id: "bluegill", name: "Bluegill" },
    { id: "crappie", name: "Crappie" },
    { id: "whitefish", name: "Mountain Whitefish" },
    { id: "sucker", name: "Sucker Fish" },
];
const select = document.getElementById("species");
species.forEach((speciesOption) => {
    const option = document.createElement("option");
    option.value = speciesOption.name; // decided not to use id
    option.textContent = speciesOption.name;
    select.appendChild(option);
});

const now = new Date();
now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
document.getElementById("catch-date").value = now.toISOString().slice(0, 16);

const locationSelect = document.getElementById("location");
const savedLocations = JSON.parse(localStorage.getItem("markers")) || [];
savedLocations.forEach((location) => {
    const option = document.createElement("option");
    option.value = location.name;
    option.textContent = location.name;
    locationSelect.appendChild(option);
});
