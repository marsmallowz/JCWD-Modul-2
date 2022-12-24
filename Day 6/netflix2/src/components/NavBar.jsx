import NavLink from "./NavLink.jsx";

const NavBar = () => {
  return (
    <nav className="topheader flex">
      <div className="topnav flex">
        <button className="mainlogo">
          <img src="/logo-netflix.png" alt="" width={"95px"} />
        </button>
        {/* Beranda acara tv dsb itu children */}
        <NavLink href="/browse">Beranda</NavLink>
        <NavLink href="/browse">Acara Tv</NavLink>
        <NavLink href="/browse">Film</NavLink>
        <NavLink href="/browse">Baru & Populer</NavLink>
        <NavLink href="/browse">Daftar Saya </NavLink>
        <NavLink href="/browse">Telusuri menurut Bahasa </NavLink>
      </div>
      <div></div>
    </nav>
  );
};

export default NavBar;
