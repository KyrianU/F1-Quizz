const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [{
    question: "Who holds the record for the most pole positions In formula 1 history?",
    choice1: "Ayrton Senna",
    choice2: "Lewis Hamilton",
    choice3: "Michael Schumacher",
    choice4: 'Max Verstappen',
    answer: 2,
},
{
    question: "Who holds the record for being the youngest formula 1 world champion?",
    choice1: "Sebastian Vettel",
    choice2: "Lewis Hamilton",
    choice3: "Michael Schumacher",
    choice4: "Fernando Alonso",
    answer: 1,
},
{
    question: "In 2016, who became the Formula 1 world champion and subsequently announced his retirement from the sport days later?",
    choice1: "Jenson Button",
    choice2: "Mark Webbter",
    choice3: "Nico Rosberg",
    choice4: "Felipe Massa",
    answer: 3,
},
{
    question: "How many points are awarded to the race winner of a Grand Prix?",
    choice1: "20",
    choice2: "10",
    choice3: "15",
    choice4: "25",
    answer: 4,
},
{
    question: "Which driver won their first race at the 2020 Italian Grand Prix?",
    choice1: "Pierre Gasly",
    choice2: "Carlos Sainz",
    choice3: "Danil Kvyat",
    choice4: "Sergio Perez",
    answer: 1,
},
{
    question: "Who holds the record for the most win In formula 1 history?",
    choice1: "Ayrton Senna",
    choice2: "Michael Schumcher",
    choice3: "Lewis Hamilton",
    choice4: "Fernando Alonso",
    answer: 3,
},
{
    question: "Which tyre company has been the sole tire supplier In formula 1 since 2011?",
    choice1: "Pirelli",
    choice2: "Michelin",
    choice3: "Goodyear",
    choice4: "Bridgestone",
    answer: 1,
},
{
    question: "In which country Is the circuit Albert Park situated?",
    choice1: "New Zealand",
    choice2: "United Kingdom",
    choice3: "Australia",
    choice4: "Netherlands",
    answer: 3,
},
{
    question: "What nationality Is Max Verstappen?",
    choice1: "French",
    choice2: "Dutch",
    choice3: "Swedish",
    choice4: "German",
    answer: 2,
},
{
    question: "Which one of these former drivers Is not a formula 1 world champion?",
    choice1: "Kimi Raikkonen",
    choice2: "Jenson Button",
    choice3: "Nico Rosberg",
    choice4: "Mark Webber",
    answer: 4,
},

];

const SCORE_POINTS = 10
const MAX_QUESTIONS = 10

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}