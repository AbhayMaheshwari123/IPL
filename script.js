import Dc from './Pages/dc.js';
import Csk from './Pages/csk.js';
import Pk from './Pages/kxip.js';
import Kkr from './Pages/kkr.js';
import Mi from './Pages/mi.js';
import Rcb from './Pages/rcb.js';
import Rr from './Pages/rr.js';
import Srh from './Pages/srh.js';
// import Error404 from './Pages/Error.js';
import Utils from './Service/util.js';
import Teams from './Pages/team.js';

const routes = {
    '/': Teams,
    '/teams': Teams,
    '/chennai-super-kings': Csk,
    '/delhi-capital': Dc,
    '/punjab-kings': Pk,
    '/kolkata-knight-rider': Kkr,
    '/mumbai-indians': Mi,
    '/rajasthan-royal': Rr,
    '/royal-challenger-banglore': Rcb,
    '/sunriser-hyderabad': Srh
};



const router = async () => {
   
    const content = document.getElementById('container');
    let request = Utils.parseRequestURL()
    let parsedURL = (request.resource ? '/' + request.resource : '/')
    let page = routes[parsedURL] ? routes[parsedURL] : Error404
    content.innerHTML = await page.render();
    await page.after_render();
}

window.addEventListener('hashchange', router);

window.addEventListener('load', router);