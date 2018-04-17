import villesActions from './villesActions';

function loadPays() {

    return function (dispatch) {

        dispatch({type: 'PAYS_LOADING'})

        const pays = [
            {
                name: 'Choisir un pays',
                id: "0"
            },
            {
                name: 'Mali',
                id: "mali"
            }
        ];

        dispatch({type: 'PAYS_LOADED', pays});

    }
}

function changerPays(pays){
    return function(dispatch){
        dispatch({type:'SET_PAYS', pays});
        dispatch(villesActions.loadVilles(pays));
    }
}


export default {
    loadPays,
    changerPays
}