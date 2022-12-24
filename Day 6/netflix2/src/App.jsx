import "./App.css";
import NavBar from "./components/NavBar";
import Focus from "./components/Focus";
import MovieRow from "./components/MovieRow";
function App() {
  return (
    <div className="mainapp">
      <NavBar />
      <Focus />
      <MovieRow />
      {/* <Movies /> */}
    </div>
  );
}

export default App;
