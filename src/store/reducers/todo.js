const initialState = {
  list: [],
  done: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      // imutabilidade, copio meu estado atual e adiciono o novo
      // vou pegar todos itens da lista, e mais novo item
      return { ...state, list: [...state.list, action.payload] };
    default:
      // retorna meu estado padrão
      return state;
  }
}
