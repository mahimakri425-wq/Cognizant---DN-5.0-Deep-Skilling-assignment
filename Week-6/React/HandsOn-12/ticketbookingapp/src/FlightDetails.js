function FlightDetails(props) {
  const flights = [
    {
      id: 1,
      flightName: "Air India",
      source: "Delhi",
      destination: "Mumbai",
      price: 4500,
    },
    {
      id: 2,
      flightName: "IndiGo",
      source: "Chennai",
      destination: "Bangalore",
      price: 3200,
    },
    {
      id: 3,
      flightName: "SpiceJet",
      source: "Kolkata",
      destination: "Delhi",
      price: 5100,
    },
  ];

  const bookTicket = (flightName) => {
    alert(`Ticket booked successfully for ${flightName}`);
  };

  return (
    <div className="flight-section">
      <h2>Flight Details</h2>

      <table>
        <thead>
          <tr>
            <th>Flight</th>
            <th>Source</th>
            <th>Destination</th>
            <th>Price</th>

            {props.canBook && <th>Action</th>}
          </tr>
        </thead>

        <tbody>
          {flights.map((flight) => (
            <tr key={flight.id}>
              <td>{flight.flightName}</td>
              <td>{flight.source}</td>
              <td>{flight.destination}</td>
              <td>₹{flight.price}</td>

              {props.canBook && (
                <td>
                  <button onClick={() => bookTicket(flight.flightName)}>
                    Book Ticket
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FlightDetails;