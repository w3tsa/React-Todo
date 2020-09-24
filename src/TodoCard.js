import React, { Component } from "react";
import DisplayTodo from "./DisplayTodo";
import { motion } from "framer-motion";
class TodoCard extends Component {
  render() {
    return (
      <>
        <motion.h1
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{
            type: "spring",
            stiffness: 90,
            damping: 20
          }}
          className="headName"
        >
          Todo List!
        </motion.h1>
        <motion.p
          className="subheading"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          A Simple react Todo App.
        </motion.p>
        <DisplayTodo />
      </>
    );
  }
}

export default TodoCard;
