import "./App.css";
import React, { useState, useEffect } from "react";
import CountLine from "./components/CountLine";
function App() {
  // let array = [];
  const [count, setCount] = useState(0);
  const [listCount, setListCount] = useState([]);
  //jeleknya componentWillmount akan muncul saat saat terjadi rerendering
  // useEffect(() => {
  //   document.title = `You clicked ${count} times`;
  // });

  useEffect(() => {
    document.title = `You clicked ${count} times`;
    // componentdidmount berisi state kosong
  }, []);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
    // count dibawah adalah state yang dicek apakah terjadi perubahan atau tidak
  }, [count]);
  return (
    <div>
      <p>You Clicked {count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
          console.log(typeof count);
          // bawah tidak bisa
          // array.push(count);
          // array.push(1);
          // console.log(array);

          // bawah bisa
          // listCount.push(count);
          // console.log(listCount);
          // setListCount([...listCount]);

          setListCount([...listCount, count]);
        }}
      >
        Click Me
      </button>

      {listCount.map((val) => {
        return <CountLine number={val} />;
      })}
    </div>
  );
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
