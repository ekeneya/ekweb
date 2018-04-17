import React, {Component} from 'react';

import {Link} from 'react-router-dom';

import {
    Button, 
    Divider,
    CircularProgress,
    FontIcon
} from 'react-md';

export default class ToolBar extends Component {

    render() {
        const {name, longitude, latitude, villeName, typeName} = this.props.structure;
        const {saved} = this.props;
        return(
            <div className="md-grid" style={{paddingLeft : 0}} >
                <div className="md-cell md-cell--7">
                    <h3 className="h2">{name}</h3>
                    <span> {typeName} à {villeName} </span>
                </div>
                <div className="md-cell md-cell--5" style={{display: 'flex', justifyContent : 'flex-end'}} >
                                        
                    <div style={{marginRight : 10}} >
                        <h3>Latitude</h3>
                        <span>{latitude}</span>
                    </div>
                    <div style={{marginRight : 10}}>
                        <h3>Longitude</h3>
                        <span>{longitude}</span>
                    </div>
                    
                    <Button 
                        iconEl={saved ? <FontIcon >done</FontIcon> : null}
                        flat 
                        primary={saved}
                        onClick={this.props.enregistrer.bind(this)} >
                        ENREGISTRER
                    </Button>
                
                </div>
                <Divider className="md-cell md-cell--12"/>
            </div>
        )
    }
}