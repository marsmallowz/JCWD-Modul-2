import "./css/all.css";
import { useState } from "react";
import Input from "./components/Input";
import ListTodo from "./components/ListTodo";

function App() {
  let objectDate = new Date();
  console.log(objectDate);
  console.log(
    typeof `${objectDate.getFullYear()}-${objectDate.getMonth()}-${objectDate.getDate()}`
  );
  const [todo, setTodo] = useState({
    todo: "",
    date: `${objectDate.getFullYear()}-${objectDate.getMonth()}-${objectDate.getDate()}`,
  });

  const [todoList, setTodoList] = useState([]);

  const handleChangeStatus = (event) => {
    console.log(event);
  };

  return (
    <div id="App" style={{}}>
      <Input
        todoState={todo}
        todoHandler={setTodo}
        todoListState={todoList}
        todoListHandler={setTodoList}
      />
      {/* <div style={{ height: "10px" }}></div> */}
      <ListTodo todoListState={todoList} todoListHandler={setTodoList} />
    </div>
  );
}

export default App;
