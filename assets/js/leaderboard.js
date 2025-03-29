// Credit: The inspiration for these codes comes from various video tutorials and content creators: Brian Design and James Quick Udemy course. Links on my Readme file //
// Create basic const function //
const leaderboardList = document.querySelector('#leaderboardList');
const highscores = JSON.parse(localStorage.getItem('highScores'));

/**
 * Scoreboard of the top 6 high scores and name of the user, where what the user types in the input field is what will be displayed on the scorecard
 */

leaderboardList.innerHTML = highscores.map(score => {
        return `<li class=li class="high-score">${score.name} - ${score.score}</li>`;
}).join('');