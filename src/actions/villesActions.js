import villeService from '../services/villeService';

function loadVilles() {

    return function (dispatch) {

        dispatch({type: 'VILLES_LOADING'})

        villeService.loadVilles()
        .then((results)=>{
            const villes = [{
                label : "Toutes les villes",
                value : "0"
            }];
            results.villes.forEach((ville) => {
                villes.push({
                    label : ville.libelle,
                    value : ville.code
                })
            });
            dispatch({type: 'VILLES_LOADED', villes});
        })
        .catch((e)=>{
            console.log(e)
        })
        
    }
}

function setVille(ville){
    return {type : 'SET_VILLE', ville};
}

function ajouterVille(ville){
    return function(dispatch){
        villeService.ajouterVille(ville)
        .then((result)=>{
            console.log(result.id)
        })
        .catch((e)=>{
            console.log(e)
        })
    }
}

export default {
    loadVilles,
    ajouterVille,
    setVille
}