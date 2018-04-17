import axios from 'axios';
//import tokenUtil from '../utils/token';

const client = axios.create({
    baseURL: 'https://ekeneya.herokuapp.com/api',
    headers : {
        'content-type' : 'application/json'
    }
})

const request = function(options){
    const onSuccess = function(response){
        return response.data;
    }
    const onError = function(error){
        if (error.response) {
            // Request was made but server responded with something
            // other than 2xx
            //console.error('Status:',  error.response.status);
            //console.error('Data:',    error.response.data);
            //console.error('Headers:', error.response.headers);
      
        } else {
            // Something else happened while setting up the request
            // triggered the error
            //tokenUtil.deleteToken();
            console.error('Error Message:', error.message);
        }
        return Promise.reject(error.response || error.message);
    }
    return client(options)
            .then(onSuccess)
            .catch(onError);
}

export default request;