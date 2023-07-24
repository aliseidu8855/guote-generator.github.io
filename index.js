const api_url = "https://api.quotable.io/random";
const quote = document.getElementById("quote");
const author = document.getElementById("author");

async function getquote(url) {
  const response = await fetch(url);
  let data = await response.json();
  quote.textContent = data.content;
  author.textContent = data.author;
}

getquote(api_url);
