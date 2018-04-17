import request from './index';
import tokenUtil from '../utils/token';

const SCOUT_URL_BASE = "/api/scouts"

function chargerScout(scoutID){
    
    return request({
        url : SCOUT_URL_BASE+"/"+scoutID,
        method : "GET",
        //  headers : {'x-token' : 'Bearer '+tokenUtil.getToken()}
    })
}

function dispoPourBureau(uniteID){
    let filter = "";
    if(uniteID){
        filter = "?unite="+uniteID
    }
    return request({
        url : SCOUT_URL_BASE+"/disponible_pour_bureau"+filter,
        method : "GET",
        //headers : {'x-token' : 'Bearer '+tokenUtil.getToken()}
    })
}

function dispoPourMembre(userInfo){
    return request({
        url : SCOUT_URL_BASE+"/disponible_pour_membre/"+userInfo,
        method : "GET",
        //headers : {'x-token' : 'Bearer '+tokenUtil.getToken()}
    })
}

function creerScout(scout){
    return request({
        url : SCOUT_URL_BASE+"/creer",
        method : "POST",
        data : scout,
        //headers : {'x-token' : 'Bearer '+tokenUtil.getToken()}
    })
}


function lister(param){
    
    const {page,scoutsParPage} = param;
    
    let filter = "";
    filter = "?page="+(page-1)+"&scoutsParPage="+scoutsParPage;

    return request({
        url : SCOUT_URL_BASE+"/lister"+filter,
        method : "GET",
        //headers : {'x-token' : 'Bearer '+tokenUtil.getToken()}
    })
}

const scoutService = {
    chargerScout,
    dispoPourBureau,
    dispoPourMembre,
    creerScout,
    lister
}
  
export default scoutService;
  