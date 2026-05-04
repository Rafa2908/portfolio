import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-div">
      <h1>
        <span>Jose</span> Calderon
      </h1>
      <p>
        I believe great <span>software</span> carries the complexity so users
        don't have to. Here's what I've been building
      </p>
      <Link to={"/projects"} className="home-btn">
        See my work
      </Link>
    </div>
  );
};

export default Home;
