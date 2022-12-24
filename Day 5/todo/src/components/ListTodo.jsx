import { useState } from "react";

export default function ListTodo(props) {
  return (
    <table>
      <tr>
        <th style={{ textAlign: "left", verticalAlign: "middle" }}>Todo</th>
        <th>Date</th>
        <th>Status</th>
      </tr>
      {console.log(props.todoListState.length === 0)}
      {props.todoListState.length === 0 ? (
        <tr></tr>
      ) : (
        props.todoListState.map((todo, key) => {
          console.log(`key ${key}`);
          return (
            <>
              <Todo myTodo={todo} myKey={key} />
            </>
          );
        })
      )}
    </table>
  );
}

export function Todo(props) {
  const [status, setStatus] = useState(props.myTodo.status);

  return (
    <tr key={props.myKey} style={status ? { backgroundColor: "grey" } : {}}>
      <td style={{ textAlign: "left", verticalAlign: "middle" }}>
        {props.myTodo.todo}
      </td>
      <td style={{ textAlign: "center", verticalAlign: "middle" }}>
        {props.myTodo.date}
      </td>
      <td style={{ textAlign: "center", verticalAlign: "middle" }}>
        <button onClick={() => setStatus(!status)}>
          {status === false ? "Uncompleted" : "Completed"}
        </button>
      </td>
    </tr>
  );
}
