import React, { Component } from 'react';

class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: props.index
    };
  }

  _toggleComplete(e) {
    const { index } = this.state;
    this.props.toggleComplete(index);
  }

  _deleteTodo(e) {
    const { index } = this.state;
    this.props.deleteTodo(index);
  }


  render() {
    const { description, isCompleted } = this.props;

    return (
      <li>
         <input type="checkbox" checked={ isCompleted } onChange={ e => this._toggleComplete(e) } />
         <span>{ description }</span>
         <button onClick={ e => this._deleteTodo(e) }>Delete</button>
       </li>
    );
  }
}


export default ToDo;

