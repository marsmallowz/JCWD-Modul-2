import "./App.css";
import { Route, Routes } from "react-router-dom";
import NetflixPage from "./pages/netflix";
import AdvancedCSSPage from "./pages/advanedcss";

function App() {
  return (
    <>
      <Routes>
        <Route path="/advancedcss" element={<AdvancedCSSPage />} />
        <Route path="/netflix" element={<NetflixPage />} />
      </Routes>
    </>
  );
}

export default App;
