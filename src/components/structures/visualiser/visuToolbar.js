import {connect} from 'react-redux';

import structuresActions from '../../../actions/structuresActions';

import ToolBar from './visuToolbar.jsx';

function mapStateToProps(state) {
  const {structure, saved} = state.structures;
  return {structure, saved};
}

function mapDispatchToProps(dispatch) {
  return {
    enregistrer : function(){
      dispatch(structuresActions.enregistrer());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToolBar)
