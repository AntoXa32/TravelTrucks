import { Link } from "react-router-dom";

function CamperCard({ camper }) {
  return (
    <div className="camper-card">
      <img src={camper.image} alt={camper.name} />
      <h4>{camper.name}</h4>
      <p>{camper.price}.00 UAH</p>
      <Link to={`/catalog/${camper.id}`}>
        <button>Show more</button>
      </Link>
      <button>Add to Favorites</button>
    </div>
  );
}

export default CamperCard;
