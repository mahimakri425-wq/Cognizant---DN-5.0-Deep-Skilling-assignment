function App() {
  const heading = 'Office Space';

  const offices = [
    {
      id: 1,
      name: 'DBS',
      rent: 50000,
      address: 'Chennai',
      image:
        'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600'
    },
    {
      id: 2,
      name: 'Regus',
      rent: 65000,
      address: 'Bangalore',
      image:
        'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600'
    },
    {
      id: 3,
      name: 'WeWork',
      rent: 58000,
      address: 'Hyderabad',
      image:
        'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600'
    }
  ];

  const pageStyle = {
    fontFamily: 'Arial, sans-serif',
    padding: '30px'
  };

  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '25px'
  };

  const cardStyle = {
    width: '300px',
    padding: '15px',
    border: '1px solid #cccccc',
    borderRadius: '8px'
  };

  const imageStyle = {
    width: '300px',
    height: '200px',
    objectFit: 'cover'
  };

  return (
    <div style={pageStyle}>
      <h1>{heading}, at Affordable Range</h1>

      <div style={containerStyle}>
        {offices.map((office) => {
          const rentStyle = {
            color: office.rent <= 60000 ? 'red' : 'green'
          };

          return (
            <div key={office.id} style={cardStyle}>
              <img
                src={office.image}
                alt={`${office.name} Office Space`}
                style={imageStyle}
              />

              <h1>Name: {office.name}</h1>

              <h3 style={rentStyle}>
                Rent: Rs. {office.rent}
              </h3>

              <h3>Address: {office.address}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
