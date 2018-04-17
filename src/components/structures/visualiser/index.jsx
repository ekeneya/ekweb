import React from 'react';
import Filtre from './visuFiltre';
import ToolBar from './visuToolbar';
import Map from './map';
import {getIdFromParam} from '../../../utils/params';

export default class Index extends React.Component {
  
  constructor(props){
    super(props);
  }

  componentDidMount(){
    const {search} = this.props.location;
    let id = getIdFromParam(search);
    this.props.loadStructure(id);  
  }

  render() {
    
    return (
      <div>
        <Filtre />
        <ToolBar />
        <div style={{height : '100%'}} >
          <Map />
        </div>
      </div>
    )
  }

}