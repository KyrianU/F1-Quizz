// Credit: The code displayed below were inspired by a couple of video tutorials from Brian Design and James quick //

// basic const function creaded //

const quizScore = document.querySelector('#quizScore')
const username = document.querySelector('#username')
const saveBtn = document.querySelector('.userSaveBtn')
const mostRecentScore = localStorage.getItem('mostRecentScore')


const highscores = JSON.parse(localStorage.getItem('highScores')) || []

// The top 6 scores will be shown on the leaderboard page //

const MAX_HiGH_SCORES = 6;

quizScore.innerText = mostRecentScore;

// Event listener for the save button function // 

username.addEventListener('keyup', () => {
    userSaveBtn.disabled = !username.value
})

/**
 * Function that enables to user to save their score and be redirected to the homepage
 */

saveHighScore = e => {
    e.preventDefault();


const score = {
    score: mostRecentScore,
    name: username.value

}

highscores.push(score);

highscores.sort( (a,b) => b.score - a.score);

highscores.splice(6);

localStorage.setItem('highscores', JSON.stringify(highscores));
window.location.assign('index.html')


};
