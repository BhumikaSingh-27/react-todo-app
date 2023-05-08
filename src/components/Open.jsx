import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { NavLink } from "react-router-dom";

const Open = () => {
  const { tododata } = useContext(TodoContext);
  const openCount = tododata.filter(({ isCompleted }) => !isCompleted);

  return (
    <div>
      <h2>Open Todo Count: {openCount.length}</h2>
      {openCount.length === 0 ? (
        <h2>No task has been completed yet!</h2>
      ) : (
        openCount.map(({ id, title, description, isCompleted }) => {
          return (
            <div className="container" key={id}>
              <h3>{title}</h3>
              <p>{description}</p>
              <p>Status:{isCompleted ? "Done" : "Not Done"}</p>
              <NavLink className="button" to={`/todo/${id}`}>
                Expand Todo
              </NavLink>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Open;
