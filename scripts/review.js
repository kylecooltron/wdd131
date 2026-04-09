const params = new URLSearchParams(window.location.search);

if (params.get("submitted") === "true") {
    let count = Number(localStorage.getItem("reviewCount")) || 0;
    count += 1;
    localStorage.setItem("reviewCount", count);

    window.history.replaceState({}, document.title, window.location.pathname);
}

document.getElementById("review-count").textContent = localStorage.getItem("reviewCount") || 0;
