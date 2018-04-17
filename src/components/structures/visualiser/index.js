import {connect} from 'react-redux';

// Actions
import structuresActions from '../../../actions/structuresActions';

import Index from './index.jsx';

function mapStateToProps(state) {
  const {notFound} = state.structures;
  return {notFound};
}

function mapDispatchToProps(dispatch) {
  return {
    loadStructure: function (structureID) {
      dispatch(structuresActions.loadStructure(structureID))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
