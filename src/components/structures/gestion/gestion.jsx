import React from 'react';

import {Link, Redirect} from 'react-router-dom';

import {
    Button,
    TextField,
    SelectField,
    Grid,
    Cell,
    CircularProgress,
    FontIcon
} from 'react-md';

import qs from 'qs';

import LINKS from '../../commun/links';

import {getIdFromParam} from '../../../utils/params';

export default class Gestion extends React.Component {

    constructor(props){
        super(props);
        this.enCreation = true;
    }

    componentDidMount(){
        this.props.loadVilles();
        this.props.loadTypeStructures();
        const {search} = this.props.location;
        let id = getIdFromParam(search);
        this.enCreation = id == null;
        this.props.loadStructure(id);
    }

    headerTraitement(){
        const {errors, saved, loading} = this.props;
        const error = Object.keys(errors).length !== 0;
        if(error){
            return (
                <h4 className="h4 md-text--error mr-0">
                    Erreur survenu lors du traitement
                </h4>
            )
        }else if(loading){
            return (
                <CircularProgress id="progress" style={{marginTop : 0}} centered={false} />
            );
        }else if(saved){
            return (
                <div>
                    <h4 className="h4 ek-text--success mr-0">
                        <FontIcon primary style={{marginRight:10}} >
                            done
                        </FontIcon>
                        Traitement effectué avec succès
                    </h4>
                </div>
            )
        }else{
            return null;
        }
    }
    
    render() {
        const {notFound} = this.props;
        if(notFound){
            return(
                <Redirect from = {LINKS.STRUCTURE_GESTION} to={LINKS.STRUCTURE_LIST} />
            )
        }

        const {name, latitude, longitude, ville, type, tel, id} = this.props.structure;
        const {errors, loading} = this.props;
        
        return (
            <Grid style={{ justifyContent : 'center'}}>
                <Cell size={7}>
                    <Grid>
                        <Cell size={12} style={{backgroundColor:'#eee'}} >
                            <h1 className="h2" style={{margin : 14}}>
                                {this.enCreation ? "AJOUT D'UNE STRUCTURE" : "MODIFICATION D'UNE STRUCTURE"}
                            </h1>
                        </Cell>
                        <Cell size={12} style={{display: 'flex'}} >
                            {this.headerTraitement()}
                        </Cell>
                        <Cell size={12} >
                            <TextField
                                id="name"
                                value={name}
                                onChange={this.props.setName.bind(this)}
                                label='NOM DE LA STRUCTURE *'
                                error={errors && errors.name ? true : false}
                                errorText={errors && errors.name}
                                onKeyPress={this.props.pressEnter.bind(this)}
                                disabled={loading}
                            />
                        </Cell>
                        <Cell size={6} >
                            <TextField
                                id="latitude"
                                type='text'
                                value={latitude}
                                onChange={this.props.setLatitude.bind(this)}
                                label='LA LATITUDE *'
                                error={errors && errors.latitude? true : false}
                                errorText={errors && errors.latitude}
                                onKeyPress={this.props.pressEnter.bind(this)}
                                disabled={loading}
                            />
                        </Cell>
                        <Cell size={6} >
                            <TextField
                                id="longitude"
                                type='text'
                                value={longitude}
                                onChange={this.props.setLongitude.bind(this)}
                                label='LA LONGITUDE *'
                                error={errors && errors.longitude ? true : false}
                                errorText={errors && errors.longitude}
                                onKeyPress={this.props.pressEnter.bind(this)}
                                disabled={loading}
                            />
                        </Cell>
                        <Cell size={12} >
                            <TextField 
                                id="tel"
                                value={tel}
                                onChange={this.props.setTel.bind(this)}
                                label='NUMEROS DE TELEPHONE'
                                error={errors && errors.tel ? true : false}
                                errorText={errors && errors.tel}
                                onKeyPress={this.props.pressEnter.bind(this)}
                                disabled={loading}
                            />
                        </Cell>
                        <Cell size={6} >
                            <SelectField
                                id="ville" 
                                value={ville}
                                menuItems={this.props.listVilles}
                                onChange={this.props.setVille.bind(this)}
                                label='VILLE *'
                                error={errors && errors.ville ? true : false}
                                errorText={errors && errors.ville}
                                className='md-cell md-cell--12'
                                disabled={loading}
                            />
                        </Cell>
                        <Cell size={6} >
                            <SelectField
                                id="type"
                                value={type}
                                menuItems={this.props.types}
                                onChange={this.props.setType.bind(this)}
                                label='TYPE DE STRUCTURE *'
                                error={errors && errors.type ? true : false}
                                errorText={errors && errors.type}
                                disabled={loading}
                                className='md-cell md-cell--12'
                            />
                        </Cell>
                        <Cell size={12} style={{marginTop: 30, display:'flex', justifyContent:'flex-end'}} >
                                <Link disabled to={LINKS.STRUCTURE_LIST}>
                                    <Button disabled={loading} flat>
                                        {id && id !== '' ? 'QUITTER' : 'ANNULER'}
                                    </Button>
                                </Link>
                            <Button disabled={loading} flat primary swapTheming onClick={this.props.enregistrer.bind(this)} >
                                ENREGISTRER
                            </Button>
                        </Cell>
                    </Grid>
                </Cell>
            </Grid>
        );
    }
}


