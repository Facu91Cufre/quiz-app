let questionItem = document.getElementById("question");
const answerBtns = document.getElementById("answer-buttons");
const btn = document.querySelectorAll(".btn");
const nextBtn = document.getElementById("next-btn");

const questions = [
  {
    question: "¿En qué año comenzó la Segunda Guerra Mundial?",
    answers: [
      { text: "1945", correct: false },
      { text: "1914", correct: false },
      { text: "1939", correct: true },
      { text: "1941", correct: false },
    ],
  },
  {
    question: "¿Quién escribió 'Don Quijote de la Mancha'?",
    answers: [
      { text: "Miguel de Cervantes", correct: true },
      { text: "William Shakespeare", correct: false },
      { text: "Gabriel García Márquez", correct: false },
      { text: "Federico García Lorca", correct: false },
    ],
  },
  {
    question: "¿Quién formuló la teoría de la relatividad?",
    answers: [
      { text: "Isaac Newton", correct: false },
      { text: "Niels Bohr", correct: false },
      { text: "Stephen Hawking", correct: false },
      { text: "Albert Einstein", correct: true },
    ],
  },
  {
    question: "¿En qué año terminó la Primera Guerra Mundial?",
    answers: [
      { text: "1914", correct: false },
      { text: "1918", correct: true },
      { text: "1910", correct: false },
      { text: "1920", correct: false },
    ],
  },
  {
    question: "¿Cuál es el río más largo del mundo?",
    answers: [
      { text: "Nilo", correct: false },
      { text: "Amazonas", correct: true },
      { text: "Misisipi", correct: false },
      { text: "Yangtsé", correct: false },
    ],
  },
  {
    question: "¿Quién pintó la Mona Lisa?",
    answers: [
      { text: "Pablo Picasso", correct: false },
      { text: "Vincent van Gogh", correct: false },
      { text: "Leonardo da Vinci", correct: true },
      { text: "Claude Monet", correct: false },
    ],
  },
  {
    question: "¿Cuál es el elemento químico más abundante en el universo?",
    answers: [
      { text: "Oxígeno", correct: false },
      { text: "Carbono", correct: false },
      { text: "Helio", correct: false },
      { text: "Hidrógeno", correct: true },
    ],
  },
  {
    question: "¿Cuál es el valor de π (pi) redondeado a dos decimales?",
    answers: [
      { text: "3.16", correct: false },
      { text: "3.14", correct: true },
      { text: "3.12", correct: false },
      { text: "3.18", correct: false },
    ],
  },
  {
    question: "¿Quién descubrió la penicilina?",
    answers: [
      { text: "Alexander Fleming", correct: true },
      { text: "Albert Einstein", correct: false },
      { text: "Isaac Newton", correct: false },
      { text: "Marie Curie", correct: false },
    ],
  },
  {
    question: "¿Quién escribió 'El Señor de los Anillos'?",
    answers: [
      { text: "C.S. Lewis", correct: false },
      { text: "George R.R. Martin", correct: false },
      { text: "J.R.R. Tolkien", correct: true },
      { text: "J.K. Rowling", correct: false },
    ],
  },
];

let currentQuestionIndex = 0;
let score = 0;

const startQuiz = () => {
  currentQuestionIndex = 0;
  score = 0;
  nextBtn.innerHTML = "Next";
  showQuestion();
};

const showQuestion = () => {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let currentQuestionNum = currentQuestionIndex + 1;
  questionItem.innerHTML = `${currentQuestionNum}. ${currentQuestion.question}`;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerBtns.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
};

const resetState = () => {
  nextBtn.style.display = "none";
  while (answerBtns.firstChild) {
    answerBtns.removeChild(answerBtns.firstChild);
  }
};

const selectAnswer = (e) => {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerBtns.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextBtn.style.display = "block";
};

const showScore = () => {
  resetState();
  if (score <= 3) {
    questionItem.innerHTML = ` ${score} de ${questions.length}. Burr"E"`;
  } else if (score > 3 && score <= 6) {
    questionItem.innerHTML = `${score} de ${questions.length}. Está mal, pero no tan mal.'`;
  } else if (score > 6 && score < 9) {
    questionItem.innerHTML = `${score} de ${questions.length}. Aprobado.`;
  } else if ((score = 9)) {
    questionItem.innerHTML = `${score} de ${questions.length}. Pego en el palo!!!`;
  } else if ((score = 10)) {
    questionItem.innerHTML = `10 de 10. Epetacula'`;
  }

  nextBtn.innerHTML = "Play again";
  nextBtn.style.display = "block";
};
const handleNextButton = () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
};
nextBtn.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});
startQuiz();
