const gameObject = () => {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black, White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                "Reggie Evens": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise, Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            }
        }
    }
}
console.log(gameObject());

const numPointsScored = (playerName) => {
    const points = 0;
    for (let player in players) {
        if (points === playerName) {
            return points = players[player].points
        }
    }
    return points;
}

const shoeSize = (playerName) => {
    for (let player in players) {
        if (player === playerName) {
            return players[player].shoe
        }
    }
}

const teamNames = () => {
    return [gameObject().home.teamName, gameObject().away.teamName];
}

const teamColors = (teamName) => {
    return gameObject().teamName === teamName ? gameObject().home.colors : gameObject().away.colors;
}

const playerNumbers = (team) => {
    let teamInfo = gameObject().home.teamName === team ? gameObject().home.players : gameObject().away.players;
    const playerNumbers = [];
    for (let player in teamInfo) {
        playerNumbers.push(teamInfo[player].number);
    }
    return playerNumbers;
}

function playerStats(playerName) {
    for (let player in players) {
        if (player === playerName) {
            return players[player];
        }
    }
}

const bigShoeRebounds = () => {
    debugger
    let largestShoe = 0;
    let largestShoeRebounds = 0;
    for (let player in players) {
        if (players[player].shoe > largestShoe) {
            largestShoe = players[player].shoe;
            largestShoeRebounds = players[player].rebounds;
        }
    }
    console.log(largestShoe);
    return largestShoeRebounds;
}

const mostPoints = () => {
    const mostPoints = 0;
    let playerWithMostPoints = "";
    for (let player in players) {
        if (players[player].points > mostPoints) {
            mostPoints = players[player].points;
            playerWithMostPoints = player;
        }
    }
    return playerWithMostPoints;
}

const winningTeam = () => {
    const homeTeam = gameObject().home.players;
    const awayTeam = gameObject().away.players;
    let pointsForHomeTeam = 0;
    let pointsForAwayTeam = 0;
    for (let player in homeTeam) {
        pointsForHomeTeam += homeTeam[player].points;
    }
    for (let player in awayTeam) {
        pointsForAwayTeam += awayTeam[player].points;
    }
    return pointsForHomeTeam > pointsForAwayTeam ? gameObject().home.teamName : gameObject().away.teamName;
}

function callOthers(){
    console.log(numPointsScored('DeSagna Diop'))
    console.log(shoeSize('Ben Gordon'))
    console.log(teamNames, teamColors('Charlotte Hornets'), playerNumbers('Brooklyn Nets'))
    console.log(playerStats('Jason Terry'), bigShoeRebounds, mostPoints, winningTeam)
}

callOthers();