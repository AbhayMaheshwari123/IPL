PlayerName=[
    document.querySelector('#name1'),
    document.querySelector('#name2'),
    document.querySelector('#name3'),
    document.querySelector('#name4'),
    document.querySelector('#name5'),
    document.querySelector('#name6'),
    document.querySelector('#name7'),
    document.querySelector('#name8'),
    document.querySelector('#name9'),
    document.querySelector('#name10'),
    document.querySelector('#name11'),

]

Matches=[
    document.querySelector('#match-name1'),
    document.querySelector('#match-name2'),
    document.querySelector('#match-name3'),
    document.querySelector('#match-name4'),
    document.querySelector('#match-name5'),
    document.querySelector('#match-name6'),
    document.querySelector('#match-name7'),
    document.querySelector('#match-name8'),
    document.querySelector('#match-name9'),
    document.querySelector('#match-name10'),
    document.querySelector('#match-name11'),
]

Runs=[
    document.querySelector('#runs-name1'),
    document.querySelector('#runs-name2'),
    document.querySelector('#runs-name3'),
    document.querySelector('#runs-name4'),
    document.querySelector('#runs-name5'),
    document.querySelector('#runs-name6'),
    document.querySelector('#runs-name7'),
    document.querySelector('#runs-name8'),
    document.querySelector('#runs-name9'),
    document.querySelector('#runs-name10'),
    document.querySelector('#runs-name11'),
]

Wickets=[
    document.querySelector('#wickets-name1'),
    document.querySelector('#wickets-name2'),
    document.querySelector('#wickets-name3'),
    document.querySelector('#wickets-name4'),
    document.querySelector('#wickets-name5'),
    document.querySelector('#wickets-name6'),
    document.querySelector('#wickets-name7'),
    document.querySelector('#wickets-name8'),
    document.querySelector('#wickets-name9'),
    document.querySelector('#wickets-name10'),
    document.querySelector('#wickets-name11'),
]



const teamcsk=[
    
      {
        "id": "2101",
        "name": "MS Dhoni",
        "nationality": "Indian",
        "image": "https://iplstatic.s3.amazonaws.com/players/210/1.png",
        "stats": {
          "matches": 15,
          "runs": 416,
          "wickets": 0
        }
      },
      {
        "id": "210898",
        "name": "Imran Tahir",
        "nationality": "Indian",
        "image": "https://iplstatic.s3.amazonaws.com/players/210/898.png",
        "stats": {
          "matches": 17,
          "runs": 0,
          "wickets": 26
        }
      },
      {
        "id": "2103746",
        "name": "Lungi Ngidi",
        "nationality": "",
        "image": "https://iplstatic.s3.amazonaws.com/players/210/3746.png",
        "stats": {
          "matches": 10,
          "runs": 76,
          "wickets": 3
        }
      },
      {
        "id": "2105443",
        "name": "Ruthuraj Gaikwad",
        "nationality": "Indian",
        "image": "https://iplstatic.s3.amazonaws.com/players/210/5443.png",
        "stats": {
          "matches": 0,
          "runs": 33,
          "wickets": 0
        }
      },
      {
        "id": "210227",
        "name": "Shane Watson",
        "nationality": "",
        "image": "https://iplstatic.s3.amazonaws.com/players/210/227.png",
        "stats": {
          "matches": 15,
          "runs": 398,
          "wickets": 10
        }
      },
      {
        "id": "210100",
        "name": "Ambati Rayudu",
        "nationality": "Indian",
        "image": "https://iplstatic.s3.amazonaws.com/players/210/100.png",
        "stats": {
          "matches": 17,
          "runs": 282,
          "wickets": 0
        }
      },
      {
        "id": "2107",
        "name": "Murali Vijay",
        "nationality": "Indian",
        "image": "https://iplstatic.s3.amazonaws.com/players/210/7.png",
        "stats": {
          "matches": 9,
          "runs": 18,
          "wickets": 1
        }
      },
      {
        "id": "210297",
        "name": "Kedar Jadhav",
        "nationality": "Indian",
        "image": "https://iplstatic.s3.amazonaws.com/players/210/297.png",
        "stats": {
          "matches": 14,
          "runs": 162,
          "wickets": 1
        }
      },
      {
        "id": "2109",
        "name": "Ravindra Jadeja",
        "nationality": "Indian",
        "image": "https://iplstatic.s3.amazonaws.com/players/210/9.png",
        "stats": {
          "matches": 16,
          "runs": 106,
          "wickets": 15
        }
      },
      {
        "id": "210140",
        "name": "Deepak Chahar",
        "nationality": "Indian",
        "image": "https://iplstatic.s3.amazonaws.com/players/210/140.png",
        "stats": {
          "matches": 7,
          "runs": 34,
          "wickets": 0
        }
      },
      {
        "id": "2104942",
        "name": "Narayan Jagadeesan",
        "nationality": "Indian",
        "image": "https://iplstatic.s3.amazonaws.com/players/210/4942.png",
        "stats": {
          "matches": 0,
          "runs": 0,
          "wickets": 0
        }
      }
]

const teamdc=[
  {
    "id": "2101563",
    "name": "Shreyas Iyer",
    "nationality": "Indian",
    "image": "https://iplstatic.s3.amazonaws.com/players/210/1563.png",
    "stats": {
      "matches": 16,
      "runs": 463,
      "wickets": 0
    }
  },
  {
    "id": "2101664",
    "name": "Kagiso Rabada",
    "nationality": "",
    "image": "https://iplstatic.s3.amazonaws.com/players/210/1664.png",
    "stats": {
      "matches": 12,
      "runs": 14,
      "wickets": 25
    }
  },
  {
    "id": "21038",
    "name": "Ishant Sharma",
    "nationality": "Indian",
    "image": "https://iplstatic.s3.amazonaws.com/players/210/38.png",
    "stats": {
      "matches": 13,
      "runs": 10,
      "wickets": 13
    }
  },
  {
    "id": "21041",
    "name": "Shikar Dhawan",
    "nationality": "Indian",
    "image": "https://iplstatic.s3.amazonaws.com/players/210/41.png",
    "stats": {
      "matches": 16,
      "runs": 521,
      "wickets": 0
    }
  },
  {
    "id": "2103764",
    "name": "Prithwi Shaw",
    "nationality": "Indian",
    "image": "https://iplstatic.s3.amazonaws.com/players/210/3764.png",
    "stats": {
      "matches": 16,
      "runs": 353,
      "wickets": 10
    }
  },
  {
    "id": "2101113",
    "name": "Axar Patel",
    "nationality": "Indian",
    "image": "https://iplstatic.s3.amazonaws.com/players/210/1113.png",
    "stats": {
      "matches": 14,
      "runs": 110,
      "wickets": 10
    }
  },
  {
    "id": "2102972",
    "name": "Rishabh Pant",
    "nationality": "Indian",
    "image": "https://iplstatic.s3.amazonaws.com/players/210/2972.png",
    "stats": {
      "matches": 16,
      "runs": 488,
      "wickets": 0
    }
  },
  {
    "id": "21030",
    "name": "Amit Mishra",
    "nationality": "Indian",
    "image": "https://iplstatic.s3.amazonaws.com/players/210/30.png",
    "stats": {
      "matches": 11,
      "runs": 21,
      "wickets": 11
    }
  }
]

const teamkxip=[
  {
    "id": "2101563",
    "name": "Shreyas Iyer",
    "nationality": "Indian",
    "image": "https://iplstatic.s3.amazonaws.com/players/210/1563.png",
    "stats": {
      "matches": 16,
      "runs": 463,
      "wickets": 0
    }
  },
  {
    "id": "2101664",
    "name": "Kagiso Rabada",
    "nationality": "",
    "image": "https://iplstatic.s3.amazonaws.com/players/210/1664.png",
    "stats": {
      "matches": 12,
      "runs": 14,
      "wickets": 25
    }
  },
  {
    "id": "21038",
    "name": "Ishant Sharma",
    "nationality": "Indian",
    "image": "https://iplstatic.s3.amazonaws.com/players/210/38.png",
    "stats": {
      "matches": 13,
      "runs": 10,
      "wickets": 13
    }
  },
  {
    "id": "21041",
    "name": "Shikar Dhawan",
    "nationality": "Indian",
    "image": "https://iplstatic.s3.amazonaws.com/players/210/41.png",
    "stats": {
      "matches": 16,
      "runs": 521,
      "wickets": 0
    }
  },
  {
    "id": "2103764",
    "name": "Prithwi Shaw",
    "nationality": "Indian",
    "image": "https://iplstatic.s3.amazonaws.com/players/210/3764.png",
    "stats": {
      "matches": 16,
      "runs": 353,
      "wickets": 10
    }
  },
  {
    "id": "2101113",
    "name": "Axar Patel",
    "nationality": "Indian",
    "image": "https://iplstatic.s3.amazonaws.com/players/210/1113.png",
    "stats": {
      "matches": 14,
      "runs": 110,
      "wickets": 10
    }
  },
  {
    "id": "2102972",
    "name": "Rishabh Pant",
    "nationality": "Indian",
    "image": "https://iplstatic.s3.amazonaws.com/players/210/2972.png",
    "stats": {
      "matches": 16,
      "runs": 488,
      "wickets": 0
    }
  },
  {
    "id": "21030",
    "name": "Amit Mishra",
    "nationality": "Indian",
    "image": "https://iplstatic.s3.amazonaws.com/players/210/30.png",
    "stats": {
      "matches": 11,
      "runs": 21,
      "wickets": 11
    }
  }
]
const teamkkr=[
  {
    "id": "2101563",
    "name": "Shreyas Iyer",
    "nationality": "Indian",
    "image": "https://iplstatic.s3.amazonaws.com/players/210/1563.png",
    "stats": {
      "matches": 16,
      "runs": 463,
      "wickets": 0
    }
  },
  {
    "id": "2101664",
    "name": "Kagiso Rabada",
    "nationality": "",
    "image": "https://iplstatic.s3.amazonaws.com/players/210/1664.png",
    "stats": {
      "matches": 12,
      "runs": 14,
      "wickets": 25
    }
  },
  {
    "id": "21038",
    "name": "Ishant Sharma",
    "nationality": "Indian",
    "image": "https://iplstatic.s3.amazonaws.com/players/210/38.png",
    "stats": {
      "matches": 13,
      "runs": 10,
      "wickets": 13
    }
  },
  {
    "id": "21041",
    "name": "Shikar Dhawan",
    "nationality": "Indian",
    "image": "https://iplstatic.s3.amazonaws.com/players/210/41.png",
    "stats": {
      "matches": 16,
      "runs": 521,
      "wickets": 0
    }
  },
  {
    "id": "2103764",
    "name": "Prithwi Shaw",
    "nationality": "Indian",
    "image": "https://iplstatic.s3.amazonaws.com/players/210/3764.png",
    "stats": {
      "matches": 16,
      "runs": 353,
      "wickets": 10
    }
  },
  {
    "id": "2101113",
    "name": "Axar Patel",
    "nationality": "Indian",
    "image": "https://iplstatic.s3.amazonaws.com/players/210/1113.png",
    "stats": {
      "matches": 14,
      "runs": 110,
      "wickets": 10
    }
  },
  {
    "id": "2102972",
    "name": "Rishabh Pant",
    "nationality": "Indian",
    "image": "https://iplstatic.s3.amazonaws.com/players/210/2972.png",
    "stats": {
      "matches": 16,
      "runs": 488,
      "wickets": 0
    }
  },
  {
    "id": "21030",
    "name": "Amit Mishra",
    "nationality": "Indian",
    "image": "https://iplstatic.s3.amazonaws.com/players/210/30.png",
    "stats": {
      "matches": 11,
      "runs": 21,
      "wickets": 11
    }
  }
]

const teammi=[
  {
    "id": "2101563",
    "name": "Shreyas Iyer",
    "nationality": "Indian",
    "image": "https://iplstatic.s3.amazonaws.com/players/210/1563.png",
    "stats": {
      "matches": 16,
      "runs": 463,
      "wickets": 0
    }
  },
  {
    "id": "2101664",
    "name": "Kagiso Rabada",
    "nationality": "",
    "image": "https://iplstatic.s3.amazonaws.com/players/210/1664.png",
    "stats": {
      "matches": 12,
      "runs": 14,
      "wickets": 25
    }
  },
  {
    "id": "21038",
    "name": "Ishant Sharma",
    "nationality": "Indian",
    "image": "https://iplstatic.s3.amazonaws.com/players/210/38.png",
    "stats": {
      "matches": 13,
      "runs": 10,
      "wickets": 13
    }
  },
  {
    "id": "21041",
    "name": "Shikar Dhawan",
    "nationality": "Indian",
    "image": "https://iplstatic.s3.amazonaws.com/players/210/41.png",
    "stats": {
      "matches": 16,
      "runs": 521,
      "wickets": 0
    }
  },
  {
    "id": "2103764",
    "name": "Prithwi Shaw",
    "nationality": "Indian",
    "image": "https://iplstatic.s3.amazonaws.com/players/210/3764.png",
    "stats": {
      "matches": 16,
      "runs": 353,
      "wickets": 10
    }
  },
  {
    "id": "2101113",
    "name": "Axar Patel",
    "nationality": "Indian",
    "image": "https://iplstatic.s3.amazonaws.com/players/210/1113.png",
    "stats": {
      "matches": 14,
      "runs": 110,
      "wickets": 10
    }
  },
  {
    "id": "2102972",
    "name": "Rishabh Pant",
    "nationality": "Indian",
    "image": "https://iplstatic.s3.amazonaws.com/players/210/2972.png",
    "stats": {
      "matches": 16,
      "runs": 488,
      "wickets": 0
    }
  },
  {
    "id": "21030",
    "name": "Amit Mishra",
    "nationality": "Indian",
    "image": "https://iplstatic.s3.amazonaws.com/players/210/30.png",
    "stats": {
      "matches": 11,
      "runs": 21,
      "wickets": 11
    }
  }
]

const teamrr=[
  {
    "id": "2101563",
    "name": "Shreyas Iyer",
    "nationality": "Indian",
    "image": "https://iplstatic.s3.amazonaws.com/players/210/1563.png",
    "stats": {
      "matches": 16,
      "runs": 463,
      "wickets": 0
    }
  },
  {
    "id": "2101664",
    "name": "Kagiso Rabada",
    "nationality": "",
    "image": "https://iplstatic.s3.amazonaws.com/players/210/1664.png",
    "stats": {
      "matches": 12,
      "runs": 14,
      "wickets": 25
    }
  },
  {
    "id": "21038",
    "name": "Ishant Sharma",
    "nationality": "Indian",
    "image": "https://iplstatic.s3.amazonaws.com/players/210/38.png",
    "stats": {
      "matches": 13,
      "runs": 10,
      "wickets": 13
    }
  },
  {
    "id": "21041",
    "name": "Shikar Dhawan",
    "nationality": "Indian",
    "image": "https://iplstatic.s3.amazonaws.com/players/210/41.png",
    "stats": {
      "matches": 16,
      "runs": 521,
      "wickets": 0
    }
  },
  {
    "id": "2103764",
    "name": "Prithwi Shaw",
    "nationality": "Indian",
    "image": "https://iplstatic.s3.amazonaws.com/players/210/3764.png",
    "stats": {
      "matches": 16,
      "runs": 353,
      "wickets": 10
    }
  },
  {
    "id": "2101113",
    "name": "Axar Patel",
    "nationality": "Indian",
    "image": "https://iplstatic.s3.amazonaws.com/players/210/1113.png",
    "stats": {
      "matches": 14,
      "runs": 110,
      "wickets": 10
    }
  },
  {
    "id": "2102972",
    "name": "Rishabh Pant",
    "nationality": "Indian",
    "image": "https://iplstatic.s3.amazonaws.com/players/210/2972.png",
    "stats": {
      "matches": 16,
      "runs": 488,
      "wickets": 0
    }
  },
  {
    "id": "21030",
    "name": "Amit Mishra",
    "nationality": "Indian",
    "image": "https://iplstatic.s3.amazonaws.com/players/210/30.png",
    "stats": {
      "matches": 11,
      "runs": 21,
      "wickets": 11
    }
  }
]

const teamrcb=[
  {
    "id": "2101563",
    "name": "Shreyas Iyer",
    "nationality": "Indian",
    "image": "https://iplstatic.s3.amazonaws.com/players/210/1563.png",
    "stats": {
      "matches": 16,
      "runs": 463,
      "wickets": 0
    }
  },
  {
    "id": "2101664",
    "name": "Kagiso Rabada",
    "nationality": "",
    "image": "https://iplstatic.s3.amazonaws.com/players/210/1664.png",
    "stats": {
      "matches": 12,
      "runs": 14,
      "wickets": 25
    }
  },
  {
    "id": "21038",
    "name": "Ishant Sharma",
    "nationality": "Indian",
    "image": "https://iplstatic.s3.amazonaws.com/players/210/38.png",
    "stats": {
      "matches": 13,
      "runs": 10,
      "wickets": 13
    }
  },
  {
    "id": "21041",
    "name": "Shikar Dhawan",
    "nationality": "Indian",
    "image": "https://iplstatic.s3.amazonaws.com/players/210/41.png",
    "stats": {
      "matches": 16,
      "runs": 521,
      "wickets": 0
    }
  },
  {
    "id": "2103764",
    "name": "Prithwi Shaw",
    "nationality": "Indian",
    "image": "https://iplstatic.s3.amazonaws.com/players/210/3764.png",
    "stats": {
      "matches": 16,
      "runs": 353,
      "wickets": 10
    }
  },
  {
    "id": "2101113",
    "name": "Axar Patel",
    "nationality": "Indian",
    "image": "https://iplstatic.s3.amazonaws.com/players/210/1113.png",
    "stats": {
      "matches": 14,
      "runs": 110,
      "wickets": 10
    }
  },
  {
    "id": "2102972",
    "name": "Rishabh Pant",
    "nationality": "Indian",
    "image": "https://iplstatic.s3.amazonaws.com/players/210/2972.png",
    "stats": {
      "matches": 16,
      "runs": 488,
      "wickets": 0
    }
  },
  {
    "id": "21030",
    "name": "Amit Mishra",
    "nationality": "Indian",
    "image": "https://iplstatic.s3.amazonaws.com/players/210/30.png",
    "stats": {
      "matches": 11,
      "runs": 21,
      "wickets": 11
    }
  }
]

const teamsrh=[
  {
    "id": "2101563",
    "name": "Shreyas Iyer",
    "nationality": "Indian",
    "image": "https://iplstatic.s3.amazonaws.com/players/210/1563.png",
    "stats": {
      "matches": 16,
      "runs": 463,
      "wickets": 0
    }
  },
  {
    "id": "2101664",
    "name": "Kagiso Rabada",
    "nationality": "",
    "image": "https://iplstatic.s3.amazonaws.com/players/210/1664.png",
    "stats": {
      "matches": 12,
      "runs": 14,
      "wickets": 25
    }
  },
  {
    "id": "21038",
    "name": "Ishant Sharma",
    "nationality": "Indian",
    "image": "https://iplstatic.s3.amazonaws.com/players/210/38.png",
    "stats": {
      "matches": 13,
      "runs": 10,
      "wickets": 13
    }
  },
  {
    "id": "21041",
    "name": "Shikar Dhawan",
    "nationality": "Indian",
    "image": "https://iplstatic.s3.amazonaws.com/players/210/41.png",
    "stats": {
      "matches": 16,
      "runs": 521,
      "wickets": 0
    }
  },
  {
    "id": "2103764",
    "name": "Prithwi Shaw",
    "nationality": "Indian",
    "image": "https://iplstatic.s3.amazonaws.com/players/210/3764.png",
    "stats": {
      "matches": 16,
      "runs": 353,
      "wickets": 10
    }
  },
  {
    "id": "2101113",
    "name": "Axar Patel",
    "nationality": "Indian",
    "image": "https://iplstatic.s3.amazonaws.com/players/210/1113.png",
    "stats": {
      "matches": 14,
      "runs": 110,
      "wickets": 10
    }
  },
  {
    "id": "2102972",
    "name": "Rishabh Pant",
    "nationality": "Indian",
    "image": "https://iplstatic.s3.amazonaws.com/players/210/2972.png",
    "stats": {
      "matches": 16,
      "runs": 488,
      "wickets": 0
    }
  },
  {
    "id": "21030",
    "name": "Amit Mishra",
    "nationality": "Indian",
    "image": "https://iplstatic.s3.amazonaws.com/players/210/30.png",
    "stats": {
      "matches": 11,
      "runs": 21,
      "wickets": 11
    }
  }
]



function storeid(nameofteam){
  team=nameofteam
  if(team=="csk"){
    setdata(teamcsk);
  }else if(team =="dc"){
    setdata(teamdc);
  }else if(team=="kxip"){
    setdata(teamkxip);
  }else if (team="kkr"){
    setdata(teamkkr);
  }else if(team=="mi"){
    setdata(teammi);
  }else if(team=="rr"){
    setdata(teamrr);
  }else if(team=="rcb"){
    setdata(teamrcb);
  }else if(team=="srh"){
    setdata(teamsrh);
  }
}
function setdata(teamdetail){
  for (let i = 0; i < teamdetail.length; i++) {
    PlayerName[i].innerText = teamdetail[i].name
    Matches[i].innerText = teamdetail[i].stats.matches
    Runs[i].innerText=teamdetail[i].stats.runs
    Wickets[i].innerText=teamdetail[i].stats.wickets
  }
}

// function setTeam(a) {
//     team = a
//     const teamUrl = {
//         csk: 'https://ipl-t20.herokuapp.com/teams/chennai-super-kings',
//         dc: 'https://ipl-t20.herokuapp.com/teams/delhi-capitals',
//         kxip: 'https://ipl-t20.herokuapp.com/teams/kings-xi-punjab',
//         kkr: 'https://ipl-t20.herokuapp.com/teams/kolkata-knight-riders',
//         mi: 'https://ipl-t20.herokuapp.com/teams/mumbai-indians',
//         rr: 'https://ipl-t20.herokuapp.com/teams/rajasthan-royals',
//         rcb: 'https://ipl-t20.herokuapp.com/teams/royal-challengers-bangalore',
//         srh: 'https://ipl-t20.herokuapp.com/teams/sunrisers-hyderabad'

//     }
//     if (team == "csk") {

//         fetchTeamData(team, teamUrl[team]);

//     } else if (team == "dc") {
//         fetchTeamData(team, teamUrl[team]);

//     } else if (team === "kxip") {
//         fetchTeamData(team, teamUrl[team]);

//     } else if (team === "kkr") {
//         fetchTeamData(team, teamUrl[team]);

//     } else if (team === "mi") {
//         fetchTeamData(team, teamUrl[team]);

//     } else if (team === "rr") {
//         fetchTeamData(team, teamUrl[team]);

//     } else if (team === "rcb") {
//         fetchTeamData(team, teamUrl[team]);

//     } else if (team === "srh") {
//         fetchTeamData(team, teamUrl[team]);

//     }
// }

// async function fetchTeamData(teamName, url) {
//     return await fetch('https://cors-anywhere.herokuapp.com/' + url, {
//         method: "GET",
//     }).then((data) => { return data.json() }).then((res) => {
//         allTeamData = res;
//         setAllTeamData()
//         console.log(allTeamData)
//     }).catch((e) => {

//     })
// }


// function setAllTeamData() {
//     for (let i = 0; i < allTeamData.length; i++) {
//         PlayerName[i].innerText = allTeamData[i].name
//         Matches[i].innerText = allTeamData[i].stats.matches[i]
//         Runs[i].innerText=allTeamData[i].stats.runs[i]
//         Wickets[i].innerText=allTeamData[i].stats.runs[i]

//     }
// }

