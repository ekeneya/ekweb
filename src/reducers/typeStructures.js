const initialState = {
    types : [],
    loading : false,
    loaded : true,
    type : "0"
}

export default function reducer(state = initialState, action = {}){
    switch (action.type) {
        
        case "SET_TYPE_STRUCTURE":
            return{
                ...state,
                type : action.data
            }
        case "TYPE_STRUCTURES_LOADING":
            return {
                ...state, 
                loaded : false,
                loading : true
            }; 

        case "TYPE_STRUCTURES_LOADED":
         
            return {
                ...state, 
                loaded : true,
                loading : false,
                types : action.types,
            };
        
            
        default:
            return state;
    }
}