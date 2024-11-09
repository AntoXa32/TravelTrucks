function CamperGallery({ images }) {
  return (
    <div className="camper-gallery">
      {images && images.length > 0 ? (
        images.map((imgUrl, index) => (
          <img
            key={index}
            src={imgUrl}
            alt={`Camper image ${index + 1}`}
            className="gallery-image"
          />
        ))
      ) : (
        <p>No images available.</p>
      )}
    </div>
  );
}

export default CamperGallery;
