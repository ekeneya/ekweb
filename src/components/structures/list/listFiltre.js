import {connect} from 'react-redux';

// Actions
import structuresActions from '../../../actions/structuresActions';
import villesActions from '../../../actions/villesActions';
import typeStructuresActions from '../../../actions/typeStructuresActions';

import Filtre from './listFiltre.jsx';

function mapStateToProps(state) {
  const {listVilles, ville} = state.villes;
  const {types,type} = state.typeStructures;
  const {searchName} = state.structures;
  return {listVilles, ville, types, type, searchName};
}

function mapDispatchToProps(dispatch) {
  return {
    loadTypeStructures : function(){
      dispatch(typeStructuresActions.loadTypeStructures())
    },
    loadVilles: function () {
      dispatch(villesActions.loadVilles())
    },
    changerVille: function(ville){
      dispatch(structuresActions.initPaginate());
      dispatch(villesActions.setVille(ville));
      dispatch(structuresActions.searchStructures())
    },
    changerType: function(type){
      dispatch(structuresActions.initPaginate());
      dispatch(typeStructuresActions.setType(type));
      dispatch(structuresActions.searchStructures())
    },
    setSearchName : function(name){
      dispatch(structuresActions.setSearchName(name));
    },
    searchStructures : function(e){
      if(e.key==="Enter"){
        dispatch(structuresActions.initPaginate());
        dispatch(structuresActions.searchStructures())
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filtre)
