import React from 'react';

// jsx não é uma linguagem, é chamado de syntax sugar
const Input = ({ onChange, value }) => (
  <input type="text" onChange={onChange} value={value} />
);

export default Input;
