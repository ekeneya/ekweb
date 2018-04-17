import {connect} from 'react-redux';

// Actions
import structuresActions from '../../../actions/structuresActions';
import villesActions from '../../../actions/villesActions';
import typeStructuresActions from '../../../actions/typeStructuresActions';

import Gestion from './gestion.jsx';

function mapStateToProps(state) {
  
  const {listVilles,ville} = state.villes;
  const {types, type} = state.typeStructures;
  const {structure, errors, saved, loading, notFound} = state.structures;
  
  if(structure.id && structure.id != ""){
    if(structure.ville === ""){
      structure.ville = ville;
    }
    if(structure.type === ""){
      structure.type = type;
    }
  }
  
  return {listVilles, types, structure, errors, saved, loading, notFound};
}

function mapDispatchToProps(dispatch) {
  return {
    setName: (name) => dispatch(structuresActions.setName(name)),
    setLatitude: (latitude) => dispatch(structuresActions.setLatitude(latitude)),
    setLongitude: (longitude) => dispatch(structuresActions.setLongitude(longitude)),
    setVille: (ville) => dispatch(structuresActions.setVille(ville)),
    setType: (type) => dispatch(structuresActions.setType(type)),
    setTel : function(tel){
      dispatch(structuresActions.setTel(tel))
    },
    enregistrer: function () {
      dispatch(structuresActions.enregistrer())
    },
    loadStructure: function (structureID) {
      if(structureID && structureID !== null && structureID !== ''){
        dispatch(structuresActions.loadStructure(structureID))
      }else{
        dispatch(structuresActions.initStructure())
      }
    },
    loadTypeStructures : function(){
      dispatch(typeStructuresActions.loadTypeStructures())
    },
    loadVilles: function () {
      dispatch(villesActions.loadVilles())
    },
    pressEnter: function(e){
      if(e.key==="Enter"){
        dispatch(structuresActions.enregistrer())
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Gestion);
