import CamperGallery from "../../components/CamperGallery/CamperGallery.jsx";
import CamperDetails from "../../components/CamperDetails/CamperDetails.jsx";
import CamperReviews from "../../components/CamperReviews/CamperReviews.jsx";
import BookingForm from "../../components/BookingForm/BookingForm.jsx";

function CamperDetailsPage() {
  return (
    <div>
      <CamperGallery />
      <CamperDetails />
      <CamperReviews />
      <BookingForm />
    </div>
  );
}

export default CamperDetailsPage;
