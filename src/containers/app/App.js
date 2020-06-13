import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from '../../components/button';
import Input from '../../components/input';
import List from '../../components/list';

import { addTodo } from '../../store/actions/todo';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
    };
  }

  handleOnClick = () => {
    const { addTodo } = this.props;
    const { input } = this.state;

    // disparar minha action todo
    addTodo(input);
  };

  handleOnChange = (event) => {
    this.setState({ input: event.target.value });
  };

  render() {
    const { input } = this.state;
    const { listTodo } = this.props; // vem de store

    return (
      <div>
        <List todoList={listTodo.list} />
        <Input onChange={(event) => this.handleOnChange(event)} value={input} />
        <Button onClick={() => this.handleOnClick()}>Adicionar</Button>
      </div>
    );
  }
}

// fazer o map
// store => state component
// state component => store
const mapStateToProps = (state) => ({
  // nome dado no reducer
  listTodo: state.todo,
});

// conectar meu component a store
// mapStateToProps
// mapDispatchToProps => addTodo para ser acessivel via props
export default connect(mapStateToProps, { addTodo })(App);
