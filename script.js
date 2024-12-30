const words = [
  "programação", "javascript", "github", "desenvolvimento", "tecnologia",
  "digitação", "código", "python", "html", "css", "projeto", "desafio",
  "desempenho", "velocidade", "teclado", "concentração"
];

let currentWord = "";
let score = 0;
let time = 30;

const wordElement = document.getElementById("word");
const inputElement = document.getElementById("input");
const scoreElement = document.getElementById("score");
const timerElement = document.getElementById("timer");

function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function updateWord() {
  currentWord = getRandomWord();
  wordElement.textContent = currentWord;
}

function updateScore() {
  score++;
  scoreElement.textContent = `Pontuação: ${score}`;
}

function startTimer() {
  const timerInterval = setInterval(() => {
    time--;
    timerElement.textContent = `Tempo restante: ${time}s`;

    if (time === 0) {
      clearInterval(timerInterval);
      alert(`Fim do jogo! Sua pontuação final foi: ${score}`);
      resetGame();
    }
  }, 1000);
}

function resetGame() {
  score = 0;
  time = 30;
  scoreElement.textContent = `Pontuação: ${score}`;
  timerElement.textContent = `Tempo restante: ${time}s`;
  updateWord();
}

inputElement.addEventListener("input", () => {
  if (inputElement.value === currentWord) {
    updateScore();
    updateWord();
    inputElement.value = "";
  }
});

// Início do jogo
updateWord();
startTimer();
