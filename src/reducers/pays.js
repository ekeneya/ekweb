const initialState = {
    listPays : [],
    pays : "0",
    loading : false,
    loaded : true
}

export default function reducer(state = initialState, action = {}){
    switch (action.type) {
        
        case "SET_PAYS":
            return {
                ...state, 
                pays : action.pays
            };   

        case "PAYS_VILLES_LOADING":
            return {
                ...state, 
                loaded : false,
                loading : true
            };        
        case "PAYS_LOADED":
            return {
                ...state, 
                loaded : true,
                loading : false,
                listPays : action.pays,
                pays : "0"
            }; 
        default:
            return state;
    }
}