TeamName = [
    document.querySelector('#TeamName-csk'),
    document.querySelector('#TeamName-dc'),
    document.querySelector('#TeamName-kxip'),
    document.querySelector('#TeamName-kkr'),
    document.querySelector('#TeamName-mi'),
    document.querySelector('#TeamName-rr'),
    document.querySelector('#TeamName-rcb'),
    document.querySelector('#TeamName-srh'),

]
TeamVenue = [
    document.querySelector('#venue-csk'),
    document.querySelector('#venue-dc'),
    document.querySelector('#venue-kxip'),
    document.querySelector('#venue-kkr'),
    document.querySelector('#venue-mi'),
    document.querySelector('#venue-rr'),
    document.querySelector('#venue-rcb'),
    document.querySelector('#venue-srh'),

]
TeamTrophy = [
    document.querySelector('#trophy-csk'),
    document.querySelector('#trophy-dc'),
    document.querySelector('#trophy-kxip'),
    document.querySelector('#trophy-kkr'),
    document.querySelector('#trophy-mi'),
    document.querySelector('#trophy-rr'),
    document.querySelector('#trophy-rcb'),
    document.querySelector('#trophy-srh'),

]

// const bckup=[
//     {
//       "id": "chennai-super-kings",
//       "teamName": "Chennai Super Kings",
//       "winningYears": [
//         2010,
//         2011,
//         2018
//       ],
//       "venue": "M. A. Chidambaram Stadium"
//     },
//     {
//       "id": "delhi-capitals",
//       "teamName": "Delhi Capitals",
//       "winningYears": [],
//       "venue": "Feroz Shah Kotla Ground"
//     },
//     {
//       "id": "kings-xi-punjab",
//       "teamName": "Kings XI Punjab",
//       "winningYears": [],
//       "venue": "IS Bindra Stadium"
//     },
//     {
//       "id": "kolkata-knight-riders",
//       "teamName": "Kolkata Knight Riders",
//       "winningYears": [
//         2012,
//         2014
//       ],
//       "venue": "Eden Gardens"
//     },
//     {
//       "id": "mumbai-indians",
//       "teamName": "Mumbai Indians",
//       "winningYears": [
//         2013,
//         2015,
//         2017,
//         2019
//       ],
//       "venue": "Wankhede Stadium"
//     },
//     {
//       "id": "rajasthan-royals",
//       "teamName": "Rajasthan Royals",
//       "winningYears": [
//         2008
//       ],
//       "venue": "Sawai Mansingh Stadium"
//     },
//     {
//       "id": "royal-challengers-bangalore",
//       "teamName": "Royal Challengers Bangalore",
//       "winningYears": [],
//       "venue": "M. Chinnaswamy Stadium"
//     },
//     {
//       "id": "sunrisers-hyderabad",
//       "teamName": "Sunrisers Hyderabad",
//       "winningYears": [
//         2016
//       ],
//       "venue": "Rajiv Gandhi Intl. Cricket Stadium"
//     }
//   ]

const fetchData = fetch("https://cors-anywhere.herokuapp.com/https://ipl-t20.herokuapp.com/teams", {
    method: "GET",
}).then((data) => { return data.json() }).then((finaldata) => {
    teamsdata = finaldata
    if (finaldata.length != 0) {
        for (let i = 0; i < teamsdata.length; i++) {
            TeamName[i].innerText = teamsdata[i].teamName
            TeamVenue[i].innerText = teamsdata[i].venue
            if (teamsdata[i].winningYears.length > 0) {
                TeamTrophy[i].innerText = teamsdata[i].winningYears

            } 

        }
    }
}).catch((e) => {
    for (let i = 0; i < bckup.length; i++) {
        TeamName[i].innerText = bckup[i].teamName
        TeamVenue[i].innerText = bckup[i].venue
        if (bckup[i].winningYears.length > 0) {
            TeamTrophy[i].innerText = bckup[i].winningYears

        } 
    }
});