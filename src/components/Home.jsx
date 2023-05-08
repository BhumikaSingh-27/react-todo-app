import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const Home = () => {
  const { tododata, markDone, state, setTask, task, addTodoItem } =
    useContext(TodoContext);

  return (
    <div>
      {state.isLoading ? (
        <h1>Loading...</h1>
      ) : state.isError ? (
        <h1>Some error occured : {state.isError}</h1>
      ) : (
        <>
          {" "}
          <div className="input-todo">
            <label>Enter Task: </label>
            <input
              type="text"
              value={task.name}
              onChange={(e) => setTask({ ...task, name: e.target.value })}
            />
            <br />
            <label>Description: </label>
            <input
              type="text"
              value={task.desc}
              onChange={(e) => setTask({ ...task, desc: e.target.value })}
            />
            <button onClick={addTodoItem}>Add</button>
          </div>
          {tododata.map(({ id, title, description, isCompleted }) => {
            return (
              <div className="container" key={id}>
                <div style={{ textDecoration: isCompleted && "line-through" }}>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <p>Status:{isCompleted ? "Done" : "Not Done"}</p>
                </div>
                <button onClick={() => markDone(id)}>
                  {isCompleted ? "Mark as Undone" : "Mark as Done"}
                </button>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default Home;
