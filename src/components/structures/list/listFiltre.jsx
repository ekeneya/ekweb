import React from 'react';

import {Link} from 'react-router-dom';

import {
  Button,
  FontIcon,
  TextField,
  Grid,
  SelectField,
  Cell
} from 'react-md';

export default class Filtre extends React.Component {

  componentDidMount(){
    this.props.loadVilles();
    this.props.loadTypeStructures();
  }

  render() {        
    
    return (
      <div style={{backgroundColor:"#eee"}} className="md-grid" >

        <SelectField
          id="ville"
          label="Ville"
          placeholder="Choisir une ville"
          menuItems={this.props.listVilles}
          value={this.props.ville} 
          onChange={this.props.changerVille.bind(this)}
          sameWidth
          className = "md-cell md-cell--3"
        />
      
        <SelectField
          id="type"
          label="Type"
          placeholder="Choisir un type"
          menuItems={this.props.types}
          value={this.props.type} 
          onChange={this.props.changerType.bind(this)}
          sameWidth
          className = "md-cell md-cell--3"
        />
            
        <Cell size={5} offset={1}>
          <TextField
            id="rechercher"
            label="Rechercher"
            placeholder="Rechercher par nom"
            onChange={this.props.setSearchName.bind(this)}
            onKeyPress={this.props.searchStructures.bind(this)}
            leftIcon={<FontIcon>search</FontIcon>}
          />
        </Cell>
      </div>
    )
  }

}