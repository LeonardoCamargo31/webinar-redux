export function addTodo(text) {
  return {
    type: 'ADD_TODO',
    payload: {
      id: Math.random(), // gerar um id aleatório
      name: text,
    },
  };
}
