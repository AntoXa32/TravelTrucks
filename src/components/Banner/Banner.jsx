import { Link } from "react-router-dom";

function Banner() {
  return (
    <div className="banner">
      <h2>Discover Your Next Adventure</h2>
      <Link to="/catalog">
        <button>View Now</button>
      </Link>
    </div>
  );
}

export default Banner;
