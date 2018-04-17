import request from './index';
import tokenUtil from '../utils/token';

const ROLE_URL_BASE = "/api/roles"


function getRole(idRole){
    return request({
        url : ROLE_URL_BASE+"/"+idRole,
        method : "GET",
        //headers : {'x-token' : 'Bearer '+tokenUtil.getToken()}
    })
}


function getRoles(){
    return request({
        url : ROLE_URL_BASE,
        method : "GET",
        //headers : {'x-token' : 'Bearer '+tokenUtil.getToken()}
    })
}


const roleService = {
    getRole,getRoles  
}
  
export default roleService;
  