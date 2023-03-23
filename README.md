# Football Standings

Discover the [football league tables](https://football-league-standings.netlify.app/) of Brazil Serie A, English Premier League, Italian Serie A, and LaLiga.

![](css/assets/demo.gif)

## How It's Made:

**Tech used:** HTML, CSS, JavaScript

Used the [football-data.org](https://www.football-data.org/) API to fetch the data for Brazil Serie A, English Premier League, Serie A, & LaLiga.

## Usage:

https://football-league-standings.netlify.app/

## Optimizations

A Cross-Origin Resource Sharing (CORS) error is temporarily being solved by routing the request to the football-data.org API through a [proxy server](https://justcors.com/).

In the future, I would love to work with the following API: https://www.api-football.com/documentation-v3. This API provides more statistics on players, coaches, transfers, injuries, etc.

## Lessons Learned:

Learned how to fetch data from an API, style, and display it.

Learned about Cross-Origin Resource Sharing and how the Access-Control-Allow-Origin Header [works](https://medium.com/@dtkatz/3-ways-to-fix-the-cors-error-and-how-access-control-allow-origin-works-d97d55946d9).

Learned about Nodelists and how they are different from Arrays, i.e. if we want to display a string of text, we must use the innerText property as opposed to direct assignment.

Learned how to write DRY and Modular code - used functions to separate functionality (especially in prem.js) so that code is easily readable.
