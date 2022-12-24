import { Routes, Route } from "react-router-dom";
import routes from "./routes/routes";

function App() {
  return (
    <>
      <Routes>
        {routes.map((val, key) => {
          return (
            <Route exact path={val.path} element={val.element} key={key} />
          );
        })}
      </Routes>
    </>
  );
}

export default App;
