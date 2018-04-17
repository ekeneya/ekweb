import React from 'react';

import {Link} from 'react-router-dom';

import {
  Cell,
  TextField,
  FontIcon,
  Button,
  Autocomplete
} from 'react-md';

import structureService from '../../../services/structureService';

export default class Filtre extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      structures : [],
      name : ""
    }
  }

  componentDidMount(){
  
  }

  onChange(name){
    this.setState({name}, function(){
      if(name.length < 2){
        return;
      }
      structureService.searchByName(name)
      .then(({structures})=>{
        this.setState({structures});
      })
      .catch((e)=>{
        console.log(e)
      })
    })
  }

  onAutocomplete(suggestion, index, matches){
    const item = matches[index];
    if(item.id){
      this.props.loadStructure(item.id);
    }
  }

  render() {        
    
    return (
      <div style={{backgroundColor:"#eee"}} className="md-grid" >            
        <Cell size={6}>
          <Autocomplete
            id="github-user-search"
            label="Search GitHub Users"
            placeholder="mlaursen"
            leftIcon={<FontIcon>search</FontIcon>}
            data={this.state.structures.map(({name, ville, type, id})=>({
              id : id,
              primaryText : name,
              secondaryText : `(${type.libelle} - ${ville.libelle})`,
            }))}
            filter={null}
            onChange={this.onChange.bind(this)}
            onAutocomplete={this.onAutocomplete.bind(this)}
            clearOnAutocomplete
          />
        </Cell>
      </div>
    )
  }

}