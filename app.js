let questionItem = document.getElementById("question");
const answerBtns = document.getElementById("answer-buttons");
const btn = document.querySelectorAll(".btn");
const nextBtn = document.getElementById("next-btn");

const questions = [
  {
    question: "¿Cuál es la capital de Francia?",
    answers: [
      { text: "Roma", correct: false },
      { text: "Madrid", correct: false },
      { text: "París", correct: true },
      { text: "Londres", correct: false },
    ],
  },
  {
    question: "¿En qué año comenzó la Segunda Guerra Mundial?",
    answers: [
      { text: "1939", correct: true },
      { text: "1945", correct: false },
      { text: "1914", correct: false },
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
      { text: "Leonardo da Vinci", correct: true },
      { text: "Vincent van Gogh", correct: false },
      { text: "Claude Monet", correct: false },
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
    let currentQuestion = questions[currentQuestionIndex];
    let currentQuestionNum = currentQuestionIndex + 1;
    questionItem.innerHTML = `${currentQuestionNum}. ${currentQuestion.question}`;
    
    currentQuestion.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerBtns.appendChild(button);
    })
}

startQuiz();

