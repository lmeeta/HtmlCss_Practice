let btn = document.querySelector("#new-qoutes");

let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes = [
  {
    quote:
      "'I believe we are here on the planet Earth to live, grow up and do what we can to make this world a better place for all people to enjoy freedom.'",
    person: "Rosa Parks",
  },
  {
    quote: '"To love oneself is the beginning of a lifelong romance."',
    person: "Oscar Wilde",
  },
  {
    quote:
      '"Sometimes the most important thing in a whole day is the rest we take between two deep breaths."',
    person: "Etty Hillesum",
  },
  {
    quote:
      '“Almost everything will work again if you unplug it for a few minutes, including you."',
    person: "Anne Lamott",
  },
  {
    quote: '"Time you enjoy wasting is not wasted time."',
    person: "Unknown",
  },
  {
    quote: '"Self-care is how you take your power back."',
    person: "Lalah Delia",
  },
  {
    quote:
      '"Knowing how to be solitary is central to the art of loving. When we can be alone, we can be with others without using them as a means of escape." ',
    person: "Bell Hooks",
  },
  {
    quote: '"Being happy never goes out of style." ',
    person: "Lilly Pulitzer",
  },
  {
    quote: "“A dead end is just a good place to turn around.” ",
    person: "Naomi Judd",
  },
  {
    quote: '"Find out who you are and do it on purpose." ',
    person: "Dolly Parton",
  },
  {
    quote:
      '"All you need in this life is ignorance and confidence; then success is sure." ',
    person: "Mark Twain",
  },
];

btn.addEventListener("click", function () {
  let random = Math.floor(Math.random() * quotes.length);

  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
});
