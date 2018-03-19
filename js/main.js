let quotes = ["Hello There", "General Kenobi, you are a bold one", "I have the high ground", "It's treason then"];
document.getElementById('getQuoteBtn').onclick = function() {
    var random = quotes[Math.floor(Math.random()*quotes.length)];
    alert(random);
};
