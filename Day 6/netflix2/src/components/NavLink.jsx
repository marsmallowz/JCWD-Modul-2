const NavLink = ({ children, href }) => {
  return (
    <a className="navlink" href={href}>
      {children}
    </a>
  );
};

export default NavLink;
