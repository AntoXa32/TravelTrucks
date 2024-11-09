import RatingStars from "../RatingStars/RatingStars.jsx";

function CamperReviews({ reviews }) {
  return (
    <div className="camper-reviews">
      <h3>Reviews</h3>
      {reviews && reviews.length > 0 ? (
        reviews.map((review, index) => (
          <div key={index} className="review">
            <RatingStars rating={review.rating} />
            <p>{review.text}</p>
            <small>— {review.author}</small>
          </div>
        ))
      ) : (
        <p>No reviews available.</p>
      )}
    </div>
  );
}

export default CamperReviews;
