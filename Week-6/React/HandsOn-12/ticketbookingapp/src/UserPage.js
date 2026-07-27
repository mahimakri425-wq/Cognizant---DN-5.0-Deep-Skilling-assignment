import FlightDetails from "./FlightDetails";

function UserPage() {
  return (
    <div>
      <h1>Welcome back</h1>

      <p>You can now book your flight tickets.</p>

      <FlightDetails canBook={true} />
    </div>
  );
}

export default UserPage;