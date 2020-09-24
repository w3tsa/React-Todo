import React, { Component } from "react";
import TodoInput from "./TodoInput";
import Todo from "./Todo";
import "./styles.css";
class DisplayTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };

    this.creatNewTodo = this.creatNewTodo.bind(this);
    this.update = this.update.bind(this);
    this.toggleCompletion = this.toggleCompletion.bind(this);
  }

  remove(id) {
    window.localStorage.removeItem("savedList");
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id)
    });
  }

  creatNewTodo(newTodo) {
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  }

  update(id, updatedTodo) {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, todo: updatedTodo };
      } else return todo;
    });
    this.setState({ todos: updatedTodos });
  }

  toggleCompletion(id) {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      } else return todo;
    });
    this.setState({ todos: updatedTodos });
  }

  render() {
    const todos = this.state.todos.map((todo) => {
      return (
        <Todo
          todoItem={todo.todo}
          key={todo.id}
          id={todo.id}
          completed={todo.completed}
          remove={() => this.remove(todo.id)}
          update={this.update}
          toggleTodo={this.toggleCompletion}
        />
      );
    });
    return (
      <div>
        {todos}
        <TodoInput createTodo={this.creatNewTodo} />
      </div>
    );
  }
}

export default DisplayTodo;
