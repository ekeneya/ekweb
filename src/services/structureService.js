import firebase from '../firebase';

import request from './index';

const db = firebase.firestore();

const STRUCTURES_URL_BASE = "/structures"

function searchStructures(params){
    return request({
        url : STRUCTURES_URL_BASE+"/chercher",
        method : "POST",
        data : formatParams(params),
    });
}


function formatParams(params){

    const {pageActive, parPage, ville, type, name} = params;
       
    const searchParams = {
        page : pageActive ? pageActive - 1 : 0,
        size : parPage,
    }

    if(type && type !== "0"){
        searchParams.codeType = type;
    }

    if(ville && ville !== "0"){
        searchParams.codeVille = ville;
    }

    if(name && name != null && name.trim().length != 0){
        searchParams.name = name;
    }

    return searchParams;
}

/**
 * 
 * @param {*} structureID 
 */
function loadStructure(structureID){
    return request({
        url : STRUCTURES_URL_BASE+"/"+structureID,
        method : "GET",
        //headers : {'x-token' : 'Bearer '+tokenUtil.getToken()}
    });
}

/**
 * 
 * @param {*} structure 
 */
function enregistrerStructure(structure) {
    
    let {id, ville, type} = structure;

    if(!id || id==="" || id === null){
        structure.id = null;
    }

    // On format la ville
    let laVille =  null;
    if(ville!=="" && ville!=="0"){
        laVille = {
            code : ville
        }
    }
    
    // On format le type de la structure
    let leType = null;
    if(type!=="" && type!=="0"){
        leType = {
            code : type
        }
    }

    const structureToSave = {
        ...structure,
        ville : laVille,
        type : leType
    }

    return request({
        url : STRUCTURES_URL_BASE+"/enregistrer",
        data : structureToSave,
        method : "POST",
        //headers : {'x-token' : 'Bearer '+tokenUtil.getToken()}
    })
}

function searchByName(name){
    return searchStructures({name, pageActive : 1, parPage : 10});
}   

function ajouterStructure(structure) {
    db
        .collection('structures')
        .add(structure)
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((e) => {
            console.log(e)
        })
}

const structureService = {
    searchStructures,
    loadStructure,
    ajouterStructure,
    enregistrerStructure,
    searchByName
}

export default structureService;
