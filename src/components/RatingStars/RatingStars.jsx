function RatingStars({ rating }) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;

  return (
    <div className="rating-stars">
      {[...Array(fullStars)].map((_, i) => (
        <span key={i}>&#9733;</span> // Зірка повного рейтингу
      ))}
      {halfStar && <span>&#9733;</span>}
    </div>
  );
}

export default RatingStars;
