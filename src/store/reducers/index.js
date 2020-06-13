import { combineReducers } from 'redux';

import todo from './todo';

// pegar essas partes de store( no caso temos só a todo)
// e juntar em uma unica store
export default combineReducers({ todo });
