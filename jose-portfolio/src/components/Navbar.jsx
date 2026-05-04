import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <Link to={"/"}>
        <h1>
          Jose <span>Portfolio</span>
        </h1>
      </Link>
      <ul className="navbar-items">
        <Link to={"/projects"}>
          <li>Projects</li>
        </Link>
        <Link to={"/about"}>
          <li>About</li>
        </Link>
        <Link to={"/contact"}>
          <li>Contact</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
