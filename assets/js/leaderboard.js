const leaderboardList = document.querySelector('#leaderboardList')
const highscores = JSON.parse(localStorage.getItem('highscores'))

leaderboardList.innerHTML = highscores.map(score => {
        return `li class=li class="high-score>${score.name} - ${score.score}</li>`
}).join('')