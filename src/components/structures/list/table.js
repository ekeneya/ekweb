import {connect} from 'react-redux';

// Actions
import structuresActions from '../../../actions/structuresActions.js';

import Table from './table.jsx';

function mapStateToProps(state) {
  const {
    list, 
    nombreStructure, 
    pageActive, 
    parPage,
    modal
  } = state.structures;
  return {
    list, 
    nombreStructure, 
    pageActive, 
    parPage,
    modal
  };
}

function mapDispatchToProps(dispatch) {
  return {
    searchStructures: function () {
      dispatch(structuresActions.searchStructures())
    },
    onPaginate : function(start, rowsPerPage, currentPage){
      dispatch(structuresActions.setPaginate(currentPage, rowsPerPage));
      dispatch(structuresActions.searchStructures())
    },
    ajouterStructure: function(structure){
      dispatch(structuresActions.ajouterStructure(structure));
    },
    closeModal : function(){
      dispatch(structuresActions.closeModal());
    }
  }
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Table)