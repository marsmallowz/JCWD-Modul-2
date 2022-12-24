import "./App.css";
import logoNetflix from "../src/assets/logo-netflix.png";

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <div className="menu-left">
          <div
          // style={{ backgroundColor: "red" }}
          >
            <img
              src={logoNetflix}
              alt={logoNetflix}
              width={"110px"}
              height={"33px"}
            />
          </div>

          <div className="list-menu">
            <div style={{ fontWeight: 500 }}>Beranda</div>
            <div>Acara TV</div>
            <div>Film</div>
            <div>Baru & Popular</div>
            <div>Daftar Saya</div>
            <div>Telusuri menurut Bahasa</div>
          </div>
        </div>
        <div className="menu-right"></div>
      </div>
    </div>
  );
}

export default App;
