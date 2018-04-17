import React, {Component} from 'react';

import {Link} from 'react-router-dom';

import {
    Button, Divider,
    CircularProgress
} from 'react-md';

import LINKS from '../../commun/links';

export default class ToolBar extends Component {

    render() {
        const {loading} = this.props;
        return(
            <div className="md-grid" style={{paddingLeft : 0}} >
                <div className="md-cell md-cell--8" style={{ alignItems:'center', display : 'flex'}} >
                    <h1 className="h2">LISTE DES STRUCTURES </h1>
                    {loading ? 
                        <CircularProgress id='progress' style={{marginTop : 0}} />
                        : null
                    }
                </div>
                <div className="md-cell md-cell--4" style={{display: 'flex', justifyContent : 'flex-end'}} >
                    <Link to={LINKS.STRUCTURE_GESTION}>
                        <Button flat primary swapTheming>AJOUTER</Button>
                    </Link>
                    <Button style={{marginLeft : 10, marginRight : 10}} icon >file_download</Button>
                    <Button icon >call_made</Button>
                </div>
                <Divider className="md-cell md-cell--12"/>
            </div>
        )
    }
}