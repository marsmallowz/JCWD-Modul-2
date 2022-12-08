import { FaSearch, FaCaretDown } from "react-icons/fa";

function NavBar() {
  return (
    <div id="navbar">
      <div style={{ display: "flex" }}>
        <div>HOME</div>
        <div>BAND</div>
        <div>TOUR</div>
        <div>CONTACT</div>
        <div>
          MORE
          <FaCaretDown />
        </div>
      </div>
      <div id="search">
        <FaSearch />
      </div>
    </div>
  );
}

export default NavBar;
