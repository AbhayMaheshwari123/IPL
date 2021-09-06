const root = document.getElementById('container');
root.innerHTML = `<div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>`;
let getTeamList = async () => {
    try {
        const response = await fetch('https://ipl-t20.herokuapp.com/teams');
        const json = response.json();
        return json;
    } catch (error) {
        console.log(error);
    }
}

let Teams = {
    render: async () => {
        let teams = await getTeamList();
        console.log(teams);
        let view = `
        <div class="container">
            <div class="card card-csk">
                <a href="/#/teams/chennai-super-kings">
                <img src="Assests/CSK logo.png" alt="">
                <div class="detail">
                    <h3 id="TeamName-csk">${teams[0].teamName}</h3>
                    <h6 id="venue-csk">${teams[0].venue}</h6>
                    <div class="trophy">
                        <h4 id="trophy-csk">${teams[0].winningYears}</h4>
                    </div> 
                </div>
                <h5>Team Home</h5>
                
            </div>
    
            <div class="card card-dc">
                <a href="/#/teams/delhi-capital">
                <img src="Assests/dc.png" alt="">
                <div class="detail">
                    <h3 id="TeamName-dc">${teams[1].teamName}</h3>
                    <h6 id="venue-dc">${teams[1].venue}</h6>
                    <div class="trophy">
                        <h4 id="trophy-dc">${teams[1].winningYears}</h4>
                    </div>
                </div>
                <h5>Team Home</h5>
                
            </div>
    
            <div class="card card-KXIP">
                <a href="/#/teams/punjab-kings">
                <img src="Assests/kxip.png" alt="">
                <div class="detail">
                    <h3 id="TeamName-kxip">${teams[2].teamName}</h3>
                    <h6 id="venue-kxip">${teams[2].venue}</h6>
                    <div class="trophy">
                        <h4 id="trophy-kxip">${teams[2].winningYears}</h4>
                    </div>
                </div>
                <h5>Team Home</h5>
                
            </div>
    
            <div class="card card-kkr">
                <a href="/#/teams/kolkata-knight-rider">
                <img src="Assests/kkr.png" alt="">
                <div class="detail">
                    <h3 id="TeamName-kkr">${teams[3].teamName}</h3>
                    <h6 id="venue-kkr">${teams[3].venue}</h6>
                    <div class="trophy">
                        <h4 id="trophy-kkr">${teams[3].winningYears}</h4>
                    </div>
                </div>
                <h5>Team Home</h5>
                
            </div>
    
            <div class="card card-mi">
                <a href="/#/teams/mumbai-indians">
                <img src="Assests/mi.png" alt="">
                <div class="detail">
                    <h3 id="TeamName-mi">${teams[4].teamName}</h3>
                    <h6 id="venue-mi">${teams[4].venue}</h6>
                    <div class="trophy">
                        <h4 id="trophy-mi">${teams[4].winningYears}</h4>
                    </div>
                </div>
                <h5>Team Home</h5>
                
            </div>
    
            <div class="card card-rr">
                <a href="/#/teams/rajasthan-royal">
                <img src="Assests/rcb.png" alt="">
                <div class="detail">
                    <h3 id="TeamName-rr">${teams[5].teamName}</h3>
                    <h6 id="venue-rr">${teams[5].venue}</h6>
                    <div class="trophy">
                        <h4 id="trophy-rr">${teams[5].winningYears}</h4>
                    </div>
                </div>
                <h5>Team Home</h5>
                
            </div>
    
            <div class="card card-rcb">
                <a href="/#/teams/royal-challenger-banglore">
                <img src="Assests/rr.png" alt="">
                <div class="detail">
                    <h3 id="TeamName-rcb">${teams[6].teamName}</h3>
                    <h6 id="venue-rcb">${teams[6].venue}</h6>
                    <div class="trophy">
                        <h4 id="trophy-rcb">${teams[6].winningYears}</h4>
                    </div>
                </div>
                <h5>Team Home</h5>
                
            </div>
    
            <div class="card card-srh">
                <a href="/#/teams/sunriser-hyderabad">
                <img src="Assests/srh.png" alt="">
                <div class="detail">
                    <h3 id="TeamName-srh">${teams[7].teamName}</h3>
                    <h6 id="venue-srh">${teams[7].venue}</h6>
                    <div class="trophy">
                        <h4 id="trophy-srh">${teams[7].winningYears}</h4>
                    </div>
                </div>
                <h5>Team Home</h5>
                
            </div>
    
        </div>
        `;
        return view;
    },
    after_render: async () => { }
}
export default Teams;