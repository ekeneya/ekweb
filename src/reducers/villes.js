const initialState = {
    listVilles : [],
    ville : "0",
    loading : false,
    loaded : true
}

export default function reducer(state = initialState, action = {}){
    switch (action.type) {
        
        case "VILLES_LOADING":
            return {
                ...state, 
                loaded : false,
                loading : true
            }; 

        case "VILLES_LOADED":
         
            return {
                ...state, 
                loaded : true,
                loading : false,
                listVilles : action.villes,
            };
        
        case "SET_VILLE" : 
            return {
                ...state,
                ville : action.ville
            }
            
        default:
            return state;
    }
}