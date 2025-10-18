// Step 1: Create an array of quote objects
const quotes = [
    { text: "The best way to get started is to quit talking and begin doing.", category: "Motivation" },
    { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", category: "Perseverance" },
    { text: "In the middle of difficulty lies opportunity.", category: "Inspiration" },
];

// Step 2: Connect to HTML elements
const quoteDisplay = document.getElementById("quoteDisplay");
const newQuoteBtn = document.getElementById("newQuote");

// Step 3: Function to show a random quote
function showRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    quoteDisplay.textContent = `"${quote.text}" — ${quote.category}`;
}

// Step 4: Add event listener for button click
newQuoteBtn.addEventListener("click", showRandomQuote);