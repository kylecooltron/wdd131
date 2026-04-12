const welcomeMessage = document.getElementById("welcome-message");
const hasVisitedBefore = localStorage.getItem("hasVisitedBefore");
if (hasVisitedBefore) {
    welcomeMessage.innerHTML = "Welcome back to Fly Fishing Spot Explorer!";
} else {
    welcomeMessage.innerHTML = "Welcome to Fly Fishing Spot Explorer!";
    localStorage.setItem("hasVisitedBefore", "true");
}
