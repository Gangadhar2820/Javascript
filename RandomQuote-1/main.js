let generate = document.querySelector(".generate");
let author = document.querySelector(".author");
let quote = document.querySelector(".quote");
generate.onclick = getRandomQuote;

async function getRandomQuote() {
  let response = await fetch("https://api.quotable.io/random");
  let data = await response.json();

  quote.innerText = data.content;
  author.innerText =' - ' + data.author;
}
