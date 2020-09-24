import React, { Component } from "react";
import uuid from "uuid";
import "./styles.css";
class TodoInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);

    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.todo.length !== 0) {
      const newTodo = {
        ...this.state,
        id: uuid(),
        completed: false
      };
      this.props.createTodo(newTodo);
      this.setState({
        todo: ""
      });
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <div className="todoInput">
        <form onSubmit={this.handleSubmit}>
          <label className="inputlabel" htmlFor="todo"></label>
          <div>
            <input
              id="todo"
              placeholder="New Todo"
              type="text"
              name="todo"
              value={this.state.todo}
              onChange={this.handleChange}
            />
            <input type="submit" value="Add Todo" className="addtodo" />
          </div>
        </form>
      </div>
    );
  }
}

export default TodoInput;
