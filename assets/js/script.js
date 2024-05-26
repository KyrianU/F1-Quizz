
const homeContainer = document.getElementById("Home-container");
const questionCount = document.getElementById("question-count");
const gameContainer = document.getElementById("game-container");
const questionNumber = document.getElementById("question-number");
const questionContent = document.getElementById("question");
const btnContent = document.getElementsByClassName("answer-btn-container");
const maxQuestions = 10

let currentQuestionIndex = 0;
let score = 0
let availableQuestion = [];




let questions = [{
        question: "Who holds the record for the most pole positions In formula 1 history?",
        answer1: "Ayrton Senna",
        answer2: "Lewis Hamilton",
        answer3: "Michael Schumacher",
        answer4: 'Max Verstappen',
        answer: 2,
},
{
        question: "Who holds the record for being the youngest formula 1 world champion?",
        answer1: "Sebastian Vettel",
        answer2: "Lewis Hamilton",
        answer3: "Michael Schumacher",
        answer4: "Fernando Alonso",
        answer: 1,
},
{
        question: "In 2016, who became the Formula 1 world champion and subsequently announced his retirement from the sport days later?",
        answer1: "Jenson Button",
        answer2: "Mark Webbter",
        answer3: "Nico Rosberg",
        answer4: "Felipe Massa",
        answer: 3,
},
{
        question: "How many points are awarded to the race winner of a Grand Prix?",
        answer1: "20",
        answer2: "10",
        answer3: "15",
        answer4: "25",
        answer: 4,
},
{
        question: "Which driver won their first race at the 2020 Italian Grand Prix?",
        answer1: "Pierre Gasly",
        answer2: "Carlos Sainz",
        answer3: "Danil Kvyat",
        answer4: "Sergio Perez",
        answer: 1,
},
{
        question: "Who holds the record for the most win In formula 1 history?",
        answer1: "Ayrton Senna",
        answer2: "Michael Schumcher",
        answer3: "Lewis Hamilton",
        answer4: "Fernando Alonso",
        answer: 3,
},
{
        question: "Which tyre company has been the sole tire supplier In formula 1 since 2011?",
        answer1: "Pirelli",
        answer2: "Michelin",
        answer3: "Goodyear",
        answer4: "Bridgestone",
        answer: 1,
},
{
        question: "In which country Is the circuit Albert Park situated?",
        answer1: "New Zealand",
        answer2: "United Kingdom",
        answer3: "Australia",
        answer4: "Netherlands",
        answer: 3,
},
{
        question: "What nationality Is Max Verstappen?",
        answer1: "French",
        answer2: "Dutch",
        answer3: "Swedish",
        answer4: "German",
        answer: 2,
},
{
        question: "Which one of these former drivers Is not a formula 1 world champion?",
        answer1: "Kimi Raikkonen",
        answer2: "Jenson Button",
        answer3: "Nico Rosberg",
        answer4: "Mark Webber",
        answer: 4,
},

];

playBtn.addEventListener("click", startQuizz);
function startGame() {
        questionNumber = 0;
        score = 0
        availableQuestion = [...questions];
        getNewQuestions();
        

}
