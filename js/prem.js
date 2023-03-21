const justCors = "https://cors-anywhere.herokuapp.com/"
const url = 'https://api.football-data.org/v4/competitions/'

document.querySelector('select').addEventListener('change', getStandings)

function getStandings(){
    let season = document.querySelector('select').value
    if (season == "Not A Season") return 0
   
    fetch(justCors + url + leagueSelector() + season,{
        headers: {
        "X-Auth-Token": "77bf0d030b9a42a3a0791ddff8c53b03"
        }
    })
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            populateTable(data)
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}

function leagueSelector(){
    const whichLeague = document.querySelector('h1').innerText
    if (whichLeague.includes("Premier League")){
        return 'PL/standings?season='
    }

    else if (whichLeague.includes("Campeonato")){
        return 'BSA/standings?season='
    }

    else if (whichLeague.includes("Ligue 1")){
        return 'FL1/standings?season='
    }

    else if (whichLeague.includes("Serie A")){
        return 'SA/standings?season='
    }
    
    else if (whichLeague.includes("LaLiga")){
        return 'PD/standings?season='
    }
}

function populateTable(data){
    const teams = data.standings[0].table
    for (let i = 0 ; i < teams.length; i++){
        document.querySelectorAll('td:first-child')[i].innerText = teams[i].position; // Rank
        document.querySelectorAll('td:nth-child(2)')[i].innerHTML = `<img src = ${teams[i].team.crest}> ${teams[i].team.shortName}` // Team Name & Emblem
        document.querySelectorAll('td:nth-child(3)')[i].innerText = teams[i].playedGames; // Games Played
        document.querySelectorAll('td:nth-child(4)')[i].innerText = teams[i].won // Games Won
        document.querySelectorAll('td:nth-child(5)')[i].innerText = teams[i].draw // Games Drawn
        document.querySelectorAll('td:nth-child(6)')[i].innerText = teams[i].lost // Games Lost
        document.querySelectorAll('td:nth-child(7)')[i].innerText = teams[i].goalsFor // Goals Scored
        document.querySelectorAll('td:nth-child(8)')[i].innerText = teams[i].goalsAgainst // Goals Conceded
        document.querySelectorAll('td:nth-child(9)')[i].innerText = teams[i].goalDifference // Goal Difference
        document.querySelectorAll('td:nth-child(10)')[i].innerText = teams[i].points // Points
        document.querySelectorAll(`td:nth-child(11)`)[i].innerHTML = lastFive(i,teams) // Last 5
    }

}

function lastFive(i,teams){
    let icons = ""
    const lastFiveResults = teams[i].form.split(",").join("")
    for (let j = 0 ; j < 5; j++){
        if (lastFiveResults[j] == "W"){
            icons+= `<img src = "css/assets/win.svg"> `
        }
        else if (lastFiveResults[j] == "L"){
            icons+= `<img src = "css/assets/loss.svg"> `
        }
        else if (lastFiveResults[j] == "D"){
            icons+= `<img src = "css/assets/draw.svg"> `
        }
        else {
            icons+= `<img src = "css/assets/nores.svg"> `
        }
    }
    return icons
}



