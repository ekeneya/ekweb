import {combineReducers} from 'redux';

import structures from "./structures";

import pays from "./pays";

import villes from "./villes";

import typeStructures from "./typeStructures";

export default combineReducers({
    structures,
    pays,
    villes,
    typeStructures
})