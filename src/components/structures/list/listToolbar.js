import {connect} from 'react-redux';

import structuresActions from '../../../actions/structuresActions';

import ToolBar from './listToolbar.jsx';

function mapStateToProps(state) {
  const {loading} = state.structures;
  return {loading};
}

function mapDispatchToProps(dispatch) {
  return {
    openModal : function(){
      dispatch(structuresActions.openModal());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToolBar)
