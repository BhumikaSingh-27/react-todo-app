import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { NavLink } from "react-router-dom";

const Done = () => {
  const { tododata } = useContext(TodoContext);
  const doneTodos = tododata.filter(({ isCompleted }) => isCompleted);
  return (
    <div>
      <h2>Done Todo count: {doneTodos.length}</h2>
      {doneTodos.length === 0 ? (
        <h2>No task has been completed yet!</h2>
      ) : (
        doneTodos.map(({ id, title, description, isCompleted }) => {
          return (
            <div className="container" key={id}>
              <h3>{title}</h3>
              <p>{description}</p>
              <p>status:{isCompleted ? "Done" : "Not Done"}</p>
              <NavLink className="button" to={`/todo/${id}`}>Expand Todo</NavLink>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Done;
