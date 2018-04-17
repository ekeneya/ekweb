import request from './index';
import tokenUtil from '../utils/token';

const REGION_URL_BASE = "/api/regions";


function getRegion(idRegion){
    return request({
        url : REGION_URL_BASE+"/"+idRegion,
        method : "GET",
        //headers : {'x-token' : 'Bearer '+tokenUtil.getToken()}
    })
}


function getRegions(){
    return request({
        url : REGION_URL_BASE,
        method : "GET",
        //headers : {'x-token' : 'Bearer '+tokenUtil.getToken()}
    })
}

function saveRegion(region){
    return request({
        url : REGION_URL_BASE+"/gerer",
        method : "POST",
        data : region,
        //headers : {'x-token' : 'Bearer '+tokenUtil.getToken()}
    })
}


const MessageService = {
    getRegion,getRegions,saveRegion 
}
  
export default MessageService;
  