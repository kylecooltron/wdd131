const feedContainer = document.getElementById("feed-container");
const loadMoreBtn = document.getElementById("feed-load-more-button");

const feedItems = JSON.parse(localStorage.getItem("feedItems"));
const feedItemsCount = feedItems ? feedItems.length : 0;
let loadedFeedItems = 0;
const pageSize = 5;

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

    feedContainer.appendChild(feedItem);
};

if (feedItems) {
    feedContainer.innerHTML = "";
    for (let i = 0; i < Math.min(pageSize, feedItems.length); i++) {
        addFeedItem(feedItems[i]);
        loadedFeedItems += 1;
    }

    if (loadedFeedItems >= feedItemsCount) {
        loadMoreBtn.style.display = "none";
    }
} else {
    setTimeout(() => {
        feedContainer.innerHTML = "<p>Your feed is empty</p>";
    }, 2000);
}

loadMoreBtn.addEventListener("click", () => {
    const limit = Math.min(loadedFeedItems + pageSize, feedItemsCount);
    for (let i = loadedFeedItems; i < limit; i++) {
        addFeedItem(feedItems[i]);
        loadedFeedItems += 1;
    }

    if (loadedFeedItems >= feedItemsCount) {
        loadMoreBtn.style.display = "none";
    }
});
