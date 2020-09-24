import React, { Component } from "react";

import "./styles.css";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      todo: this.props.todoItem
    };

    this.toggleForm = this.toggleForm.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  toggleForm() {
    this.setState({
      isEditing: !this.state.isEditing
    });
  }

  handleUpdate(e) {
    e.preventDefault();
    //take new task data and pass up to props
    this.props.update(this.props.id, this.state.todo);

    this.setState({
      isEditing: false
    });
  }

  handleChange(e) {
    this.setState({
      todo: e.target.value
    });
  }

  handleToggle(e) {
    this.props.toggleTodo(this.props.id);
  }

  render() {
    let result;
    if (this.state.isEditing) {
      result = (
        <div>
          <form onSubmit={this.handleUpdate}>
            <input
              id="editTodo"
              type="text"
              name="todo"
              value={this.state.todo}
              onChange={this.handleChange}
            />
            <button className="todoBtn">Save</button>
          </form>
        </div>
      );
    } else {
      result = (
        <div>
          <ul className="display-todo">
            <li>
              <p
                onClick={this.handleToggle}
                className={this.props.completed ? "done" : ""}
                id="todoItem"
              >
                {this.props.todoItem}
              </p>
              <div>
                <button className="todoBtn" onClick={this.toggleForm}>
                  Edit
                </button>
                <button className="todoBtn" onClick={this.props.remove}>
                  X
                </button>
              </div>
            </li>
          </ul>
        </div>
      );
    }
    return result;
  }
}

export default Todo;
