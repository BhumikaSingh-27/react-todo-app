import { createContext, useEffect, useState } from "react";
import { fakeFetch } from "../todolist";

export const TodoContext = createContext();

export const TodoContextProvider = ({ children }) => {
  const [tododata, setTodoData] = useState([]);
  const [task, setTask] = useState({ name: "", desc: "" });
  const [state, setState] = useState({ isLoading: false, isError: null });

  useEffect(() => {
    (async () => {
      setState({ ...state, isLoading: true });
      try {
        const {
          status,
          data: { todos },
        } = await fakeFetch("https://example.com/api/todos");
        if (status === 200) {
          setTodoData(todos);
          setState({ isLoading: false, isError: null });
        }
      } catch (e) {
        setState({ isLoading: false, isError: e.message });
        console.log(e);
      }
    })();
  }, []);

  //   useEffect(() => {
  //     (async () => {
  //       setState({ ...state, isLoading: true });
  //       try {
  //         const { status, data } = await fakeFetch(
  //           "https://example.com/api/todos"
  //         );
  //         if (status === 200) {
  //           setData(data.todos);
  //           setState({ isLoading: false, isError: null });
  //         }
  //       } catch (e) {
  //         setState({ isLoading: false, isError: e.message });
  //         console.log(e);
  //       }
  //     })();
  //   }, [state]);

  const markDone = (todoId) => {
    const todos = tododata.map((todo) =>
      todo.id === todoId ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setTodoData(todos);
  };

  const addTodoItem = () => {
    setTodoData((data) => [
      ...data,
      {
        id: data.length + 1,
        title: task.name,
        description: task.desc,
        isCompleted: false,
      },
    ]);
    setTask({ ...task, name: "", desc: "" });
  };

  console.log("newData", tododata);
  return (
    <TodoContext.Provider
      value={{ tododata, markDone, state, setTask, task, addTodoItem }}
    >
      {children}
    </TodoContext.Provider>
  );
};
