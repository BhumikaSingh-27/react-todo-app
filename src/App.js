import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./components/Home";
import Done from "./components/Done";
import Open from "./components/Open";
import { Link } from "react-router-dom";
import Detail from "./components/Detail";

function App() {
  return (
    <div className="App">
      <h1>Todo App📝</h1>
      <nav>
        <Link className="link" to="/">
          Summary Page
        </Link>
        <Link className="link" to="/done">
          Done
        </Link>
        <Link className="link" to="/open">
          Open
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/done" element={<Done />}></Route>
        <Route path="/open" element={<Open />}></Route>
        <Route path="/todo/:todoId" element={<Detail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
