import update from 'react-addons-update';

function initStructure() {
    return {
        id: null,
        name: "",
        latitude: 0,
        longitude: 0,
        type: "",
        ville: "",
        tel : ""
    }
}

const initialState = {
    list: [],
    nombreStructure : 0,
    pageActive : 1,
    parPage : 10,
    structure: initStructure(),
    saved : false,
    errors : {},
    error : false,
    loading: false,
    loaded: true,
    notFound : false,
    searchName : "",
    modal : false
}

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {

        case "SET_STRUCTURE_MODAL" : 
            return {
                ...state,
                modal : action.modal
            };
        case "SET_STRUCTURES_SEARCH":
            return{
                ...state,
                searchName : action.searchName
            };
        case "SET_STRUCTURES_PAGINATE":
            if(!action.data){
                return{
                    ...state,
                    pageActive : initialState.pageActive
                };
            }
            return{
                ...state,
                parPage : action.data.parPage,
                pageActive : action.data.pageActive
            };
        case "STRUCTURES_LOADED":
            return {
                ...state,
                loaded: true,
                loading: false,
                list: action.data.list,
                nombreStructure : action.data.nombreStructure,
            };

        case 'SET_STRUCTURE_ERRORS':
            return{
                ...state,
                errors : action.data.errors,
                error : action.data.error,
                saved : false,
                loading : false
            };
        
        case "STRUCTURES_LOADING":
            return {
                ...state,
                loaded: false,
                loading: true,
                notFound : false
            };

        case "SET_STRUCTURE_SAVING":
            return {
                ...state,
                loading : true,
                loaded : false,
                saved : false,
                errors : {},
                error : false
            }
        case "SET_STRUCTURE_SAVED":
            return{
                ...state,
                saved : true,
                loading : false,
                structure : action.structure
            }
        case "STRUCTURE_NOT_FOUND":
            return{
                ...state,
                notFound : true
            }
        case "STRUCTURE_LOADED":
            return update(state, {
                structure: {
                    $set: action.structure
                },
                loaded: {
                    $set: true
                },
                loading: {
                    $set: false
                },
                saved : {
                    $set: false
                }
            });

        case "INIT_STRUCTURE":
            return update(state, {
                structure: {
                    $set: initStructure()
                },
                loaded: {
                    $set: true
                },
                loading: {
                    $set: false
                },
                errors: {
                    $set : {}
                },
                saved : {
                    $set : false
                },
                notFound : {
                    $set : false
                }
            });

        case "SET_STRUCTURE_TEL":
            return update(state, {
                structure: {
                    tel : {
                        $set: action.tel
                    }
                }
            });
    
        case "SET_STRUCTURE_NAME":
            return update(state, {
                structure: {
                    name: {
                        $set: action.name
                    }
                }
            });

        case "SET_STRUCTURE_LATITUDE":
            return update(state, {
                structure: {
                    latitude: {
                        $set: action.latitude
                    }
                }
            });

        case "SET_STRUCTURE_LONGITUDE":
            return update(state, {
                structure: {
                    longitude: {
                        $set: action.longitude
                    }
                }
            });
        case "SET_STRUCTURE_POSITION":
            return update(state, {
               structure: {
                   longitude : {
                       $set : action.data.longitude
                   },
                   latitude : {
                       $set : action.data.latitude
                   }
               },
               saved : {
                   $set : false
               }
            });
        case "SET_STRUCTURE_TYPE":
            return update(state, {
                structure: {
                    type: {
                        $set: action.data
                    }
                }
            });

        case "SET_STRUCTURE_VILLE":
            return update(state, {
                structure: {
                    ville: {
                        $set: action.ville
                    }
                }
            });

        default:
            return state;
    }
}