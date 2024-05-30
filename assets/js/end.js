const resultsContainer = document.querySelector('.results-container')
const username = document.querySelector('#username')
const saveBtn = document.querySelector('.userSaveBtn')
const mostRecentScore = localStorage.getItem('mostRecentScore')


const highscores = JSON.parse(localStorage.getItem('highScores')) || []

const MAX_HiGH_SCORES = 6 

finalScore.innexText = mostRecentScore

username.addEventListener('keyup', () => {
    saveBtn.disabled = !username.value
})

saveHighscore = e => {
    e.preventDefault()
}

    const score = {
        score: mostRecentScore,
        name: username.value
    }

    highscores.push(score)

    highscores.sort( (a,b) => b.score - a.score);

    highscores.splice(6)

    localStorage.setItem('highscores', JSON.stringify(highscores))
    window.location.assign('index.html');

