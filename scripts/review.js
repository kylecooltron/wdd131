// Increment and display review count
window.addEventListener("DOMContentLoaded", function () {
    let count = Number(localStorage.getItem("reviewCount")) || 0;
    count++;
    localStorage.setItem("reviewCount", count);
    document.getElementById("review-count").textContent = count;
});
