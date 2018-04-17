import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import { NavigationDrawer } from 'react-md';

import Structures from './components/structures/list';
import Gestion from './components/structures/gestion';
import Visualiser from './components/structures/visualiser';
import Medicaments from './components/medicaments';

import NavLink from './components/commun/navLink';
import ITEMS from './components/commun/navItems';
import LINKS from './components/commun/links';

export default class Template extends Component{
    
    render(){
        return (
            <NavigationDrawer
                drawerTitle="MENU"
                toolbarTitle="EKENEYA" 
                contentClassName="md-grid"
                navItems = {ITEMS.map((item)=><NavLink {...item} key={item.to} />)}
            >
                <Switch>
                    <Route path={LINKS.STRUCTURE_LIST} exact component={Structures} />
                    <Route path={LINKS.STRUCTURE_GESTION} exact component={Gestion} />
                    <Route path={LINKS.STRUCTURE_VISUALISER} exact component={Visualiser} />
                    <Route path={ITEMS[1].to} exact component={Medicaments} />
                </Switch> 

            </NavigationDrawer>
        )
    }
}

const RouteWithSubRoutes = route => {
    return (
        <Route
            path={route.path}
            render={props => (<route.component {...props} routes={route.routes}/>)}/>
    )
};