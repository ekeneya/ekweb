import React from 'react';

//import tokenService from '../utils/token';

import {
    Route,
    Redirect
} from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
    return(
        <Route {...rest} render={props => {
            const content = true ? 
                <Component {...props}/> :             
                <Redirect to={{ pathname: '/connexion', state: { from: props.location } }}/>
            return content
        }}/>
    );
    
}

export default PrivateRoute;