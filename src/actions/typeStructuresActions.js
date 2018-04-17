import typeStructureService from '../services/typeStructureService';

function loadTypeStructures() {

    return function (dispatch) {

        dispatch({type: 'TYPE_STRUCTURES_LOADING'})

        typeStructureService
            .loadTypeStructures()
            .then((results) => {
                const types = [{
                    value : "0",
                    label : 'Tous les types'
                }];
                results.types.forEach((type) => {
                    types.push({
                        label : type.libelle,
                        value : type.code
                    });
                });
                dispatch({type: 'TYPE_STRUCTURES_LOADED', types});
            })
            .catch((error) => {
                console.log(error);
            })

    }
}

function ajouterTypeStructure(typeStructre) {
    return function (dispatch) {
        typeStructureService
            .ajouterTypeStructure(typeStructre)
            .then((result) => {
                console.log(result.id)
            })
            .catch((error) => {
                console.log(error);
            })
    }
}

function setType(data) {
    return {type: "SET_TYPE_STRUCTURE", data}
}

export default {
    loadTypeStructures,
    ajouterTypeStructure,
    setType
}