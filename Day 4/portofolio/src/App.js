import "./App.css";
import {
  FaMeteor,
  FaMoon,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaBars,
} from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <div id="navBar">
        <div style={{ display: "flex", alignItems: "center" }}>
          <button className="navBarButton">
            <FaMeteor />
            Alsandy Maulana
          </button>
          <div style={{ margin: "6px", padding: "5px" }}>/</div>
          <button className="navBarButton">Project</button>
          <div style={{ margin: "6px", padding: "5px" }}>/</div>
          <button className="navBarButton">Posts</button>
        </div>
        <button id="nightMode">
          <FaMoon />
        </button>
      </div>
      <div
        id="hamburger-menu"
        style={{
          // display: "flex",
          alignSelf: "flex-start",
          margin: "5px",
        }}
      >
        <FaBars />
      </div>
      <div className="firstGrid">
        <div style={{ textAlign: "center" }}>
          <div id="title">ALSANDY MAULANA</div>
          <div id="subTitle">I Love Programmer</div>
          <img src="/assets/squid2.jpg" alt="" width="120" height="120" />
        </div>

        <div>
          <div className="titleContent">
            <u> Now </u>
          </div>
          <p className="textContent">
            I'm learn to become a Fullstack Developer. I've used Dart using the
            Flutter Framework to create an Android application and Golang using
            Gin to create an api. This is website i made using HTML and CSS to
            showcase my project and a few things.
          </p>
        </div>

        <div style={{ textAlign: " center" }}>
          <button>Portofolio</button>
        </div>

        <div>
          <div className="titleContent">
            <u> Bio </u>
          </div>
          <div className="secondGrid">
            <div style={{ fontWeight: "bold", fontSize: "14px" }}>1999</div>
            <div>
              <p className="textContent">Born in Tanjungpinang, Indonesia.</p>
            </div>
            <div style={{ fontWeight: "bold", fontSize: "14px" }}>2022</div>
            <div>
              <p className="textContent">
                Completed the Degree's Program in the Undergraduate School of
                Computer Science at Fakultas Ilmu Pengetahuan Alam Universitas
                Negeri Semarang.
              </p>
            </div>
            <div style={{ fontWeight: "bold", fontSize: "14px" }}>
              2022 to present
            </div>
            <div>
              <p class="textContent">Studying . . .</p>
            </div>
          </div>
        </div>

        <div>
          <div className="titleContent">
            <u> I Like </u>
          </div>
          <p className="textContent">
            Swimming, playing TCG, reading manhwa, manhua and manga with genre
            rein-carnation or smart MC.
          </p>
        </div>

        <div>
          <div className="titleContent">
            <u>Social Media</u>
          </div>
          <div id="socialMediaGrid">
            <div style={{ textAlign: "left" }}>
              <FaInstagram style={{ fontSize: "25px" }} />
            </div>
            <div style={{ textAlign: "left", fontSize: "14px" }}>
              <a
                href="https://www.instagram.com/massandz/ "
                target="_blank"
                rel="noreferrer"
              >
                @massandz
              </a>
            </div>
            <div style={{ textAlign: "left" }}>
              <FaGithub style={{ fontSize: "25px" }} />
            </div>
            <div style={{ textAlign: "left", fontSize: "14px" }}>
              <a
                href="https://github.com/marsmallowz"
                target="_blank"
                rel="noreferrer"
              >
                @marsmallowz
              </a>
            </div>
            <div style={{ textAlign: "left" }}>
              <FaLinkedin style={{ fontSize: "25px" }} />
            </div>
            <div style={{ textAlign: "left", fontSize: "14px" }}>
              <a
                href="https://id.linkedin.com/in/alsandy-maulana-a7058014b"
                target="_blank"
                rel="noreferrer"
              >
                @alsandymaulana
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
