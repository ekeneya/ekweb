import structureService from '../services/structureService';
import {format, formatter} from '../utils/errorUtil';

function searchStructures() {
    return function (dispatch, getState) {

        dispatch({type: 'STRUCTURES_LOADING'})
        
        const {villes, typeStructures, structures} = getState();
        
        const params = {
            ville: villes.ville,
            type: typeStructures.type,
            pageActive : structures.pageActive,
            parPage : structures.parPage,
            name : structures.searchName
        };
                
        structureService
            .searchStructures(params)
            .then((results) => {
                dispatch({type: 'STRUCTURES_LOADED', data : {
                    list : results.structures,
                    nombreStructure : results.nombreStructure
                }})
            })
            .catch((e) => {
                console.log(e)
            })

    }
}

/**
 * Pour ouvrir le modal
 */
function openModal (){
    return {type: 'SET_STRUCTURE_MODAL' , modal : true};
}

/**
 * Pour fermer le modal
 */
function closeModal (){
    return {type: 'SET_STRUCTURE_MODAL' , modal : false};
}

function ajouterStructure(structure) {
    return function (dispatch) {
        structureService.ajouterStructure(structure);
    }
}

function initStructure(){
    return {type: 'INIT_STRUCTURE'};
}

/**
 *
 * @param {*} ID
 */
function loadStructure(ID) {

    return function (dispatch) {

        dispatch({type: 'INIT_STRUCTURE'});

        if (!ID || ID === "") {
            return;
        }

        dispatch({type: 'STRUCTURES_LOADING'});

        structureService
            .loadStructure(ID)
            .then((result) => {
                dispatch({type: 'STRUCTURE_LOADED', structure : convertStrucutre(result)});
            })
            .catch((e) => {
                dispatch({type: 'STRUCTURE_NOT_FOUND'});
            })

    }
}

/**
 * 
 */
function enregistrer() {
    return function (dispatch, getState) {
        dispatch({type: "SET_STRUCTURE_SAVING", errors: {}});
        const {structure} = getState().structures;
        structureService
            .enregistrerStructure(structure)
            .then((result) => {
                dispatch({
                    type: "SET_STRUCTURE_SAVED", 
                    structure : convertStrucutre(result)
                })
            })
            .catch(({data}) => {
                dispatch({type: "SET_STRUCTURE_ERRORS", data : formatter(data)});
            })
    }
}

function convertStrucutre(structure){
    return {...structure, 
        type : structure.type.code,
        typeName : structure.type.libelle,
        ville : structure.ville.code,
        villeName : structure.ville.libelle,
    };
}

function setName(name) {
    return {type: 'SET_STRUCTURE_NAME', name};
}

function setLongitude(longitude) {
    return {type: 'SET_STRUCTURE_LONGITUDE', longitude};
}

function setLatitude(latitude) {
    return {type: 'SET_STRUCTURE_LATITUDE', latitude};
}

function setType(data) {
    return {type: 'SET_STRUCTURE_TYPE', data};
}

function setVille(ville) {
    return {type: 'SET_STRUCTURE_VILLE', ville};
}

function setTel(tel){
    return {type: 'SET_STRUCTURE_TEL', tel};
}

function setPaginate(pageActive, parPage){
    return {type : "SET_STRUCTURES_PAGINATE", data : {pageActive, parPage}}
}

function initPaginate(){
    return {type : "SET_STRUCTURES_PAGINATE"};
}

function setSearchName(searchName){
    return{
        type : "SET_STRUCTURES_SEARCH",
        searchName
    }
}

function setPosition(latitude, longitude){
    return{
        type : 'SET_STRUCTURE_POSITION',
        data : {latitude, longitude}
    }
}

export default {
    loadStructure,
    initStructure,
    ajouterStructure,
    setPaginate,
    initPaginate,
    setSearchName,
    searchStructures,
    setName,
    setLongitude,
    setLatitude,
    setVille,
    setType,
    setTel,
    setPosition,
    enregistrer,
    openModal,
    closeModal
}