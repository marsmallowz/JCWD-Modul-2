import { useEffect, useState } from "react";
import Movie from "../components/movie";
import MovieDetail from "../components/movieDetail";
import "../css/netflix.css";

export default function NetflixPage() {
  const [movies, setMovies] = useState([
    {
      title: "Stranger things",
      match: "95%",
      year: 2017,
      synopsis: `While preparing her late mother's seaside cottage for sale, a woman (Bridget Collins) discovers a homeless artist (Adeel Akhtar) living there. She invites him to stay in an adjoining shed, and the two form a fragile bond.`,
      category: "Science, Fiction, Horror, Drama Television, Series",
      img_url:
        "http://asset-a.grid.id/crop/0x0:0x0/x/photo/2018/07/31/2984177993.jpg",
    },
    {
      title: "Bullet Train",
      match: "87%",
      year: 2022,
      synopsis: `Five assassins board a Japanese bullet train bound for Kyoto and come to discover that their seemingly separate missions are mysteriously linked.`,
      category: "action ,comedy film",
      img_url:
        "https://occ-0-6708-64.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABfybx8sO9Ah50hAiyoEWh1ljO_Hi4-ZXdlhnteko2QioGZ--fCB6nKYejBZsSYdPtX-nEaDp6CAW9cC8IwO9Qm5_3WsH3pn0Dyf4.jpg?r=2e3",
    },
    {
      title: "Uncharted",
      match: "97%",
      year: 2022,
      synopsis: `Street-smart treasure hunter Nathan Drake and his renegade mentor Sully set out on a dangerous adventure across the globe to find Magellan's lost gold.            `,
      category: "Science, Fiction, Horror, Drama Television, Series",
      img_url:
        "https://occ-0-6708-64.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABXY2VvgJN2P86Vds0Rmz1ShqYndn8xTgsRUy0fT970Rj9QBpECgS9hkBSMJQvexrzAG-vf-Zfo9oOOoQhvzYEzjToC4X6DlLRhai.jpg?r=f31",
    },
    {
      title: "Troll",
      match: "97%",
      year: 2022,
      synopsis: `When an explosion in the Norwegian mountains awakens an ancient troll, officials appoint a fearless paleontologist to stop it from wreaking deadly havoc.`,
      category: "Action, Adventure",
      img_url:
        "https://occ-0-6708-64.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABSYDBj7An0dAh34eMsLsSZ_JjF08zVpMK5Xb3M5FcJSuMB0lzi2u-lbGR5wMj5x8UXd0kUJLIKKUBcrlINTD3pUwXtACKqT3gqJt.jpg?r=309",
    },
    {
      title: "My Name Is Vendetta",
      match: "88%",
      year: 2022,
      synopsis: `When enemies from the past kill his wife and brother-in-law, a former mafia enforcer and his daughter flee to Milan to plot their revenge.`,
      category: "Action, Adventure",
      img_url:
        "https://occ-0-6708-64.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABertyWsaSQhIfC4nvbk1DUUWqIR9UNkXkB_vW6q0N1an2EIjr1zlJ2j-oasB4xl8A7-KOJEHn-Lckz49MPkYJPhSZQ4Hozt0zzJO.jpg?r=4f1",
    },
    {
      title: "Red Notice",
      match: "91%",
      year: 2022,
      synopsis: `An FBI profiler pursuing the world's most wanted art thief becomes his reluctant partner in crime to catch an elusive crook who's always one step ahead.`,
      category: "Action, Adventure",
      img_url:
        "https://occ-0-6708-64.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABQu9mse0lSb9MtIXnowfBtmd6q_g_5bdhpYWNxFjVNF76JyhXUZudM5h7rZG3eIP_m9acUlTRss79HUoxXlTxtYf_6JfKJE6g9if.jpg?r=590",
    },
    {
      title: "The Gray Man",
      match: "76%",
      year: 2022,
      synopsis: `When a shadowy CIA agent uncovers damning agency secrets, he’s hunted across the globe by a sociopathic rogue operative who’s put a bounty on his head.`,
      category: "Action, Adventure",
      img_url:
        "https://occ-0-6708-64.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABbPXSGkNDo3cQ2rBKviUt71o_aPhcLPIcfsm8c8d2E2xEiu8qcLlAkPdMGyf6qqVK7kunauLQe9n1saLPSD6fjq-YYtIuKNcMbtO.jpg?r=d7f",
    },
  ]);

  const [movie, setMovie] = useState({});

  const [newData, setData] = useState({
    title: "",
    match: "",
    year: 2022,
    synopsis: "",
    category: "",
    img_url:
      "https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png",
  });
  function changeMovie(newMovie) {
    setMovie(newMovie);
  }

  async function showForm() {
    var x = await document.getElementById("background-add");

    if (x.style.display === "none" || x.style.display === "") {
      x.style.display = "flex";
      x.style.flexDirection = "row";
    } else {
      x.style.display = "none";
    }
  }

  function addproductItem() {
    if (movies.find((val) => val.title === newData.title))
      return alert("you already add this Movie");
    setMovies([...movies, newData]);

    return alert("new movie added ");
  }

  function inputHandler(event) {
    const { value, name } = event.target;
    setData({
      ...newData,
      [name]: value,
    });
  }

  useEffect(() => {
    if (newData.img_url === "")
      setData({
        ...newData,
        ["img_url"]:
          "https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png",
      });
  }, [newData.img_url]);

  useEffect(() => {
    setMovie(movies[0]);
  }, []);

  return (
    <>
      <div className="netflix-template">
        <div>
          <div className="navbar-netflix">
            <div className="navbar-logo"> NETFLIX</div>
            <div className="navbar-text">
              <div className="navbar-box1">UNLIMITED TV SHOWS & MOVIES</div>
              <div className="navbar-box2" onClick={showForm}>
                JOIN NOW
              </div>
              <div className="navbar-box3" onClick={showForm}>
                {" "}
                SIGN IN
              </div>
            </div>
          </div>
          <div id="background-add">
            <div className="product-add">
              <img
                src={newData.img_url}
                alt="product_img"
                style={{ width: "100%", height: "200px" }}
              />
              <input
                name="title"
                className="input-product"
                type={"text"}
                placeholder="Movie Title"
                onChange={inputHandler}
              ></input>
              <input
                name="img_url"
                className="input-product"
                type={"text"}
                placeholder="Image URL"
                onChange={inputHandler}
              ></input>
              <input
                name="match"
                min={1}
                max={100}
                className="input-product"
                type={"number"}
                placeholder="Match"
                onChange={inputHandler}
              ></input>
              <input
                name="year"
                className="input-product"
                type={"number"}
                placeholder="Year"
                onChange={inputHandler}
              ></input>
              <textarea
                name="synopsis"
                className="input-product"
                type={"text"}
                placeholder="Movie Synopsis"
                onChange={inputHandler}
              ></textarea>
              <input
                name="category"
                className="input-product"
                type={"text"}
                placeholder="Category"
                onChange={inputHandler}
              ></input>
              <button className="button-add-product" onClick={addproductItem}>
                Add Movie{" "}
              </button>
            </div>
          </div>
        </div>

        <div
          className="movie-template"
          style={{ backgroundImage: `url("${movie.img_url}")` }}
        >
          <MovieDetail movie={movie} />
          <div className="movie-img"></div>
        </div>
        <div className="movie-slider">
          <div className="movie-slider-popular">POPULAR ON NETFLIX</div>
          <div className="movie-list">
            {movies.map((val, idx) => {
              return (
                <div
                  id={"movie_" + idx}
                  key={idx}
                  className="movie"
                  onClick={() => changeMovie(val)}
                >
                  <img src={val.img_url} alt="" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
