import request from './index';
//import tokenUtil from '../utils/token';

const TYPE_STRUCTURE_URL_BASE = "/types"


function loadTypeStructures(){
    return request({
        url : TYPE_STRUCTURE_URL_BASE+"/all",
        method : "GET",
        //headers : {'x-token' : 'Bearer '+tokenUtil.getToken()}
    })
}


const typeStructureService = {
    loadTypeStructures
}
  
export default typeStructureService;
  