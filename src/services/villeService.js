import request from './index';
//import tokenUtil from '../utils/token';

const VILLE_URL_BASE = "/villes"


/*function getRole(idRole){
    return request({
        url : ROLE_URL_BASE+"/"+idRole,
        method : "GET",
    })
}*/


function loadVilles(){
    return request({
        url : VILLE_URL_BASE+"/all",
        method : "GET",
        //headers : {'x-token' : 'Bearer '+tokenUtil.getToken()}
    })
}


const villeService = {
    loadVilles
}
  
export default villeService;
  