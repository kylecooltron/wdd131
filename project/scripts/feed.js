const feedContainer = document.getElementById("feed-container");

const feedItems = localStorage.getItem("feedItems");

const addFeedItem = (item) => {
    const feedItem = document.createElement("div");
    feedItem.classList.add("feed-item");

    const title = document.createElement("p");
    title.textContent = item.title;
    title.classList.add("feed-title");

    const date = document.createElement("p");
    date.textContent = item.date;

    const description = document.createElement("p");
    description.innerHTML = item.description; // bad security, but I'm doing it anyways to make life easier.

    feedItem.appendChild(title);
    feedItem.appendChild(date);
    feedItem.appendChild(description);

    feedContainer.prepend(feedItem);
};

if (feedItems) {
    feedContainer.innerHTML = "";
    for (const item of JSON.parse(feedItems)) {
        addFeedItem(item);
    }
} else {
    setTimeout(() => {
        feedContainer.innerHTML = "<p>Your feed is empty</p>";
    }, 2000);
}
