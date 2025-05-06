const quotes = [
  {
    text: "You have to fight to reach your dream. You have to sacrifice and work hard for it.",
    author: "Lionel Messi",
    img: "images/messi.jpg"
  },
  {
    text: "The best decisions aren’t made with your mind, but with your instinct.",
    author: "Lionel Messi",
    img: "images/messi.jpg"
  },
  {
    text: "You can overcome anything if, and only if, you love something enough.",
    author: "Lionel Messi",
    img: "images/messi.jpg"
  },
  {
    text: "Dreams are not what you see in your sleep, they are the things that don’t let you sleep.",
    author: "Cristiano Ronaldo",
    img: "images/ronaldo.jpg"
  },
  {
    text: "I’m living a dream I never want to wake up from.",
    author: "Cristiano Ronaldo",
    img: "images/ronaldo.jpg"
  },
  {
    text: "We don’t want to tell our dreams. We want to show them.",
    author: "Cristiano Ronaldo",
    img: "images/ronaldo.jpg"
  },
  {
    text: "Success is no accident. It is hard work, perseverance, learning, studying, sacrifice.",
    author: "Pelé",
    img: "images/pele.jpg"
  },
  {
    text: "Everything is practice.",
    author: "Pelé",
    img: "images/pele.jpg"
  },
  {
    text: "Enthusiasm is everything. It must be taut and vibrating like a guitar string.",
    author: "Pelé",
    img: "images/pele.jpg"
  },
  {
    text: "I learned all about life with a ball at my feet.",
    author: "Ronaldinho",
    img: "images/ronaldinho.jpg"
  },
  {
    text: "My game is based on improvisation. Often, a forward does not know what he will do until he sees how the defender reacts.",
    author: "Ronaldinho",
    img: "images/ronaldinho.jpg"
  },
  {
    text: "I’ve always been happy when I’m playing football. That’s when I feel most alive.",
    author: "Ronaldinho",
    img: "images/ronaldinho.jpg"
  }
];

let correctIndex = 0;
let hasGuessedWrong = false;

function newRound() {
  hasGuessedWrong = false;
  resetStyles();

  const randomQuoteIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomQuoteIndex];
  document.getElementById("quote-text").textContent = `"${quote.text}"`;

  correctIndex = Math.floor(Math.random() * 2);

  const wrongOptions = quotes.filter(q => q.author !== quote.author);
  const wrongQuote = wrongOptions[Math.floor(Math.random() * wrongOptions.length)];

  const choices = [quote, wrongQuote];
  if (correctIndex === 1) choices.reverse();

  document.getElementById("img1").src = choices[0].img;
  document.getElementById("name1").textContent = choices[0].author;

  document.getElementById("img2").src = choices[1].img;
  document.getElementById("name2").textContent = choices[1].author;
}

function makeGuess(index) {
  const choice1 = document.getElementById("choice1");
  const choice2 = document.getElementById("choice2");

  const isCorrect = index === correctIndex;

  if (isCorrect) {
    const correctChoice = (index === 0 ? choice1 : choice2);
    correctChoice.classList.add("correct");

    choice1.style.pointerEvents = "none";
    choice2.style.pointerEvents = "none";

    setTimeout(() => {
      newRound();
    }, 1200);
  } else {
    (index === 0 ? choice1 : choice2).classList.add("wrong");
    hasGuessedWrong = true;
  }
}

function resetStyles() {
  const choice1 = document.getElementById("choice1");
  const choice2 = document.getElementById("choice2");

  choice1.classList.remove("correct", "wrong");
  choice2.classList.remove("correct", "wrong");

  choice1.style.opacity = "1";
  choice2.style.opacity = "1";

  choice1.style.pointerEvents = "auto";
  choice2.style.pointerEvents = "auto";
}

window.onload = newRound;

