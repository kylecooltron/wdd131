const today = new Date();
document.getElementById("currentyear").innerHTML = `©${today.getFullYear()}`;
document.getElementById("lastModified").innerHTML = `Last Modified: ${document.lastModified}`;

const hamburger = document.getElementById("hamburger");
const nav = document.querySelector(".navigation");

hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
});



