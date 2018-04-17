import request from './index';

import tokenUtil from '../utils/token';

const UNITE_URL_BASE = "/api/unites"


function ajouterUnite(unite){
    
    return request({
        url : UNITE_URL_BASE+"/creer",
        data : unite,
        method : "POST",
        //headers : {'x-token' : 'Bearer '+tokenUtil.getToken()}
    })
}


function getUnite(idUnite){
    return request({
        url : UNITE_URL_BASE+"/"+idUnite,
        method : "GET",
        headers : {'x-token' : 'Bearer '+tokenUtil.getToken()}
    })
}

function chargerUnites(){
    return request({
        url : UNITE_URL_BASE,
        method : 'GET'
    })
}

function lister(param){
    
    const {page,uniteParPage, region, ville} = param;
    
    let filter = "";
    filter = "?page="+(page-1)+"&size="+uniteParPage;

    if(region && region != "0"){
        filter += "&region="+region;
    }
    if(ville && ville != "0"){
        filter += "&ville="+ville;
    }
    return request({
        url : UNITE_URL_BASE+"/lister"+filter,
        method : "GET",
        //headers : {'x-token' : 'Bearer '+tokenUtil.getToken()}
    })
}

function checkLimit(unite, role){

    return request({
        url : UNITE_URL_BASE+"/checkLimit/"+unite+"/"+role,
        method : "GET",
        //headers : {'x-token' : 'Bearer '+tokenUtil.getToken()}
    })
}


function rechercher(nom){
    return request({
        url : UNITE_URL_BASE+"/rechercher?nom="+nom,
        method : "GET",
        //headers : {'x-token' : 'Bearer '+tokenUtil.getToken()}
    })
}

const uniteService = {
    getUnite,
    chargerUnites,
    lister,
    ajouterUnite,
    rechercher,
    checkLimit
}
  
export default uniteService;
  