import FlightDetails from "./FlightDetails";

function GuestPage() {
  return (
    <div>
      <h1>Please sign up.</h1>

      <p>You can view flight details. Login to book a ticket.</p>

      <FlightDetails canBook={false} />
    </div>
  );
}

export default GuestPage;