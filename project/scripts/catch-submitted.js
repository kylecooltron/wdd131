import { saveFeedItem } from "./feed-module.js";

const params = new URLSearchParams(window.location.search);

if (params.get("submitted") === "true") {
    const catchData = Object.fromEntries([...params.entries()].filter(([key]) => key !== "submitted"));
    console.log("Catch Data:", catchData);

    // const feedDescription = `Species: ${catchData.species}<br>
    // Length: ${catchData["length"]}<br>
    // Location: ${catchData.location}<br>
    // Fly-Type: ${catchData["fly-type"]}<br>
    // Pattern: ${catchData["pattern"]}<br>
    // Notes: ${catchData.notes}`;

    let feedDescription = "";

    if (catchData.species) {
        feedDescription += `Species: ${catchData.species}<br>`;
    }

    if (catchData["length"]) {
        feedDescription += `Length: ${catchData["length"]}<br>`;
    }

    if (catchData.location) {
        feedDescription += `Location: ${catchData.location}<br>`;
    }

    if (catchData["fly-type"]) {
        feedDescription += `Fly-Type: ${catchData["fly-type"]}<br>`;
    }

    if (catchData["pattern"]) {
        feedDescription += `Pattern: ${catchData["pattern"]}<br>`;
    }

    if (catchData.notes) {
        feedDescription += `Notes: ${catchData.notes}`;
    }

    saveFeedItem("🐟Catch Recorded", feedDescription);
    window.history.replaceState({}, document.title, window.location.pathname);
}
