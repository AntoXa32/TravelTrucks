import { useState } from "react";

function BookingForm() {
  const [bookingDetails, setBookingDetails] = useState({
    startDate: "",
    endDate: "",
    guests: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Логіка для обробки бронювання
    console.log("Booking submitted:", bookingDetails);
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <label>
        Start Date:
        <input
          type="date"
          name="startDate"
          value={bookingDetails.startDate}
          onChange={handleChange}
        />
      </label>
      <label>
        End Date:
        <input
          type="date"
          name="endDate"
          value={bookingDetails.endDate}
          onChange={handleChange}
        />
      </label>
      <label>
        Guests:
        <input
          type="number"
          name="guests"
          min="1"
          max="10"
          value={bookingDetails.guests}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Book Now</button>
    </form>
  );
}

export default BookingForm;
