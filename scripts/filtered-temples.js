const today = new Date();
document.getElementById("currentyear").innerHTML = `©${today.getFullYear()}`;
document.getElementById("lastModified").innerHTML = `Last Modified: ${document.lastModified}`;

const hamburger = document.getElementById("hamburger");
const nav = document.querySelector(".navigation");

hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
    },
    // Add more temple objects here...
    {
        templeName: "Seattle Washington Temple",
        location: "Bellevue, Washington, United States",
        dedicated: "1980, November, 21",
        area: 110000,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/seattle-washington-temple/seattle-washington-temple-55800-main.jpg",
    },
    {
        templeName: "Laie Hawaii Temple",
        location: "Laie, Hawaii, United States",
        dedicated: "1919, November, 27",
        area: 42100,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/laie-hawaii-temple/laie-hawaii-temple-7370-main.jpg",
    },
    {
        templeName: "Rome Italy Temple",
        location: "Rome, RM, Italy",
        dedicated: "2019, March, 10",
        area: 41010,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-2642-main.jpg",
    },
];

// Temple card rendering with filtering
const container = document.getElementById("temple-container");

function renderTemples(templeList) {
    container.innerHTML = "";
    templeList.forEach((temple) => {
        const card = document.createElement("section");
        card.className = "temple-card";

        const name = document.createElement("h2");
        name.textContent = temple.templeName;
        card.appendChild(name);

        const location = document.createElement("p");
        location.textContent = `Location: ${temple.location}`;
        card.appendChild(location);

        const dedicated = document.createElement("p");
        dedicated.textContent = `Dedicated: ${temple.dedicated}`;
        card.appendChild(dedicated);

        const area = document.createElement("p");
        area.textContent = `Area: ${temple.area.toLocaleString()} sq ft`;
        card.appendChild(area);

        const img = document.createElement("img");
        img.src = temple.imageUrl;
        img.alt = temple.templeName;
        img.loading = "lazy";
        img.className = "temple-img";
        card.appendChild(img);

        container.appendChild(card);
    });
}

function getDedicatedYear(dedicated) {
    if (!dedicated) return 0;
    const year = parseInt(dedicated.split(",")[0], 10);
    return year;
}

renderTemples(temples); // Show all by default

const navHome = document.getElementById("nav-home");
const navOld = document.getElementById("nav-old");
const navNew = document.getElementById("nav-new");
const navLarge = document.getElementById("nav-large");
const navSmall = document.getElementById("nav-small");

navHome.addEventListener("click", (e) => {
    e.preventDefault();
    renderTemples(temples);
});

navOld.addEventListener("click", (e) => {
    e.preventDefault();
    const filtered = temples.filter((t) => getDedicatedYear(t.dedicated) < 1900);
    renderTemples(filtered);
});

navNew.addEventListener("click", (e) => {
    e.preventDefault();
    const filtered = temples.filter((t) => getDedicatedYear(t.dedicated) > 2000);
    renderTemples(filtered);
});

navLarge.addEventListener("click", (e) => {
    e.preventDefault();
    const filtered = temples.filter((t) => t.area > 90000);
    renderTemples(filtered);
});

navSmall.addEventListener("click", (e) => {
    e.preventDefault();
    const filtered = temples.filter((t) => t.area < 10000);
    renderTemples(filtered);
});
