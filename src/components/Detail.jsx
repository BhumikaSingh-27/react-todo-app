import React, { useContext } from "react";
import { useParams } from "react-router";
import { TodoContext } from "../context/TodoContext";

const Detail = () => {
  const { todoId } = useParams();
  const { tododata } = useContext(TodoContext);

  const todoDetail = tododata.find(({ id }) => id.toString() === todoId);
  console.log(todoDetail);

  return (
    <div>
      <h2>Todo Detail</h2>
      <div className="todo-detail">
        <div>
          <h3>{todoDetail?.title}</h3>
          <p>{todoDetail?.description}</p>
          <p>Status:{todoDetail?.isCompleted ? "Done" : "Not Done"}</p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
