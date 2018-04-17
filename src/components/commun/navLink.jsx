import React from 'react';
import PropTypes from 'prop-types';
import { Link, Route } from 'react-router-dom';
import { FontIcon, ListItem } from 'react-md';

const NavLink = ({ label, to, icon, exact }) => (
<Route path={to} exact={exact}>
    {({location}) => {
        return (
            <ListItem
                component={Link}
                active={location.pathname.startsWith(to)}
                to={to}
                primaryText={label}
                leftIcon={icon ? <FontIcon>{icon}</FontIcon> : null}
            />
        );
    }}
</Route>
);

NavLink.propTypes = {
  label: PropTypes.string.isRequired,
  to: PropTypes.string,
  exact: PropTypes.bool,
  icon: PropTypes.node,
};
export default NavLink;