const fishingQuotes = [
    {
        quote: "Many men go fishing all of their lives without knowing that it is not fish they are after.",
        author: "Henry David Thoreau",
    },
    {
        quote: "There is certainly something in angling that tends to produce a serenity of the mind.",
        author: "Washington Irving",
    },
    {
        quote: "Fly fishing is not a matter of life and death… it’s much more important than that.",
        author: "Unknown",
    },
    {
        quote: "The charm of fishing is that it is the pursuit of what is elusive but attainable.",
        author: "John Buchan",
    },
    {
        quote: "Fishing provides that connection with the whole living world.",
        author: "Ted Hughes",
    },
    {
        quote: "In our family, there was no clear line between religion and fly fishing.",
        author: "Norman Maclean",
    },
    {
        quote: "Eventually, all things merge into one, and a river runs through it.",
        author: "Norman Maclean",
    },
    {
        quote: "The solution to any problem—work, love, money— is to go fishing.",
        author: "John Gierach",
    },
    {
        quote: "If I fished only to capture fish, my fishing trips would have ended long ago.",
        author: "Zane Grey",
    },
    {
        quote: "Fly fishing may be a very pleasant amusement; but angling for trout is really a science.",
        author: "Izaak Walton",
    },
    {
        quote: "Angling may be said to be so like mathematics that it can never be fully learned.",
        author: "Izaak Walton",
    },
    {
        quote: "There are always new places to go fishing. For any fisherman, there's always a new place, always a new horizon.",
        author: "Jack Nicklaus",
    },
    {
        quote: "Nothing makes a fish bigger than almost being caught.",
        author: "Unknown",
    },
    {
        quote: "The angler forgets most of the fish he catches, but he does not forget the streams and lakes in which they are caught.",
        author: "Charles K. Fox",
    },
    {
        quote: "Time spent fishing is never wasted.",
        author: "Unknown",
    },
    {
        quote: "Poets talk about 'spots of time,' but it is really fishermen who experience eternity compressed into a moment.",
        author: "Arnold Gingrich",
    },
    {
        quote: "A trout is a moment of beauty known only to those who seek it.",
        author: "Arnold Gingrich",
    },
    {
        quote: "The best fishermen I know are not the ones who catch the most fish.",
        author: "John Gierach",
    },
    {
        quote: "The river is my church.",
        author: "Unknown",
    },
    {
        quote: "A bad day of fishing is better than a good day of work.",
        author: "Unknown",
    },
    {
        quote: "Calling fly fishing a hobby is like calling brain surgery a job.",
        author: "Paul Schullery",
    },
    {
        quote: "The trout do not live in ugly places.",
        author: "Unknown",
    },
    {
        quote: "The cast is the fisherman’s signature.",
        author: "Unknown",
    },
    {
        quote: "You can’t buy happiness, but you can buy a fly rod—and that’s pretty close.",
        author: "Unknown",
    },
    {
        quote: "The fishing was good; it was the catching that was bad.",
        author: "A.K. Best",
    },
    {
        quote: "There is a fine line between fishing and just standing on the shore like an idiot.",
        author: "Steven Wright",
    },
    {
        quote: "Do not tell fish stories where the people know you; but particularly, don’t tell them where they know the fish.",
        author: "Mark Twain",
    },
    {
        quote: "I never drink water because of the disgusting things that fish do in it.",
        author: "W.C. Fields",
    },
    {
        quote: "Fishing is much more than fish. It is the great occasion when we may return to the fine simplicity of our forefathers.",
        author: "Herbert Hoover",
    },
    {
        quote: "Good things come to those who wade.",
        author: "Unknown",
    },
    {
        quote: "A fisherman is a jerk on one end of a line waiting for a jerk on the other.",
        author: "Unknown",
    },
    {
        quote: "The tug is the drug.",
        author: "Unknown",
    },
    {
        quote: "Fly fishing is solitary, contemplative, and artistic.",
        author: "Unknown",
    },
    {
        quote: "Trout don’t live in ugly places.",
        author: "Lee Wulff",
    },
    {
        quote: "Game fish are too valuable to be caught only once.",
        author: "Lee Wulff",
    },
    {
        quote: "The fish and I were both stunned and disbelieving to find ourselves connected by a line.",
        author: "William Humphrey",
    },
    {
        quote: "No human being, however great, or powerful, was ever so free as a fish.",
        author: "John Ruskin",
    },
    {
        quote: "There’s a fine line between fishing and standing on the bank like a fool.",
        author: "Unknown",
    },
    {
        quote: "Fishing is the discipline of waiting.",
        author: "Unknown",
    },
    {
        quote: "A river seems a magic thing. A magic, moving, living part of the very earth itself.",
        author: "Laura Gilpin",
    },
    {
        quote: "The best way to a fisherman's heart is through his fly box.",
        author: "Unknown",
    },
    {
        quote: "The rhythm of the cast is the rhythm of the river.",
        author: "Unknown",
    },
    {
        quote: "To him, all good things—trout as well as eternal salvation—come by grace.",
        author: "Norman Maclean",
    },
    {
        quote: "You don’t catch trout with your hands; you catch them with your mind.",
        author: "Unknown",
    },
    {
        quote: "A day on the river restores the soul.",
        author: "Unknown",
    },
    {
        quote: "Some go to church and think about fishing; others go fishing and think about God.",
        author: "Tony Blake",
    },
    {
        quote: "The river knows everything; go and learn from it.",
        author: "Unknown",
    },
];

const quoteOfTheDay = document.getElementById("quote-of-the-day");
const quoteAuthor = document.getElementById("quote-author");
// randomly select a quote from the array
const randomIndex = Math.floor(Math.random() * fishingQuotes.length);
quoteOfTheDay.innerHTML = `${fishingQuotes[randomIndex].quote}`;
quoteAuthor.innerHTML = `${fishingQuotes[randomIndex].author}`;
