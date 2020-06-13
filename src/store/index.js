// single source of truth

// createStore responsavel por pegar todos os reducers
// e estar criando a minha store
import { createStore } from 'redux';

import reducers from './reducers';

export default createStore(reducers);
