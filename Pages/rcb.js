let getPlayerList = async () => {
    try {
        const response = await fetch('https://ipl-t20.herokuapp.com/teams/royal-challengers-bangalore');
        const json = response.json();
        return json;
    } catch (error) {
        console.log(error);
    }
}

let Rcb = {
    render: async () => {
        let playersList = await getPlayerList();
        let view = `
        <div class="team-container">
        <div class="team-header rcb">
            <div class="team-header-overlay">
                <div class="team-header-overlay-img">
                    <div class="teamheader-overlay-color">
                    </div>
                </div>
            </div>
        </div>
        <div class="team-card-container">
            <div  class="team-player">
                ${playersList.players.map(player =>
                    `<div class="card card-rcb">
                    <div class="playerphoto"><img id="img-name1" src="${player.image} alt=${player.name}" alt=""></div>
                    <div class="playerdetail">
                        <div class="Playername">
                            <h5 id="name1">${player.name}</h5>
                        </div>
                        <h6>IPL 2021</h6>
                        <div class="scorecard">
                            <div class="matches">
                                <h5 id="match-name1">${player.stats.matches}</h5>
                                <h5>Matches</h5>
                            </div>
                            <div class="runs">
                                <h5 id="runs-name1">${player.stats.runs}</h5>
                                <h5>Runs</h5>
                            </div>
                            <div class="wickets">
                                <h5 id="wickets-name1">${player.stats.wickets}</h5>
                                <h5>Wickets</h5>
                            </div>
                        </div>
                        <div><h4>View Profile</h4></div>
                    </div>
                </div>`
        ).join('')
            }
            </div>
        </div>
   </div> 
        `
        return view;
    },
    after_render: async () => { }
}

export default Rcb;