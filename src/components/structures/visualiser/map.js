import {connect} from 'react-redux';

import Map from './map.jsx';
import structuresActions from '../../../actions/structuresActions';

function mapStateToProps(state) {
  const {structure} = state.structures;
  const position = {
    lat : structure.latitude,
    lng : structure.longitude
  }
  return {position};
}

function mapDispatchToProps(dispatch) {
  return {
    setPosition : function (latitude, longitude){
      dispatch(structuresActions.setPosition(latitude, longitude));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Map)