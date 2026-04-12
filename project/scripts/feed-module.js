export const saveFeedItem = (title, description) => {
    const item = {
        title,
        description,
        date: new Date().toLocaleString(),
    };
    let feedItems = localStorage.getItem("feedItems");
    feedItems = feedItems ? JSON.parse(feedItems) : [];
    feedItems.unshift(item);
    localStorage.setItem("feedItems", JSON.stringify(feedItems));
};
