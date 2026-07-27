function BookDetails(props) {
  return (
    <div className="details-column bordered-column">
      <h1>Book Details</h1>

      {props.books && props.books.length > 0 ? (
        props.books.map((book) => (
          <div className="detail-item" key={book.id}>
            <h3>{book.bname}</h3>
            <p>{book.price}</p>
          </div>
        ))
      ) : (
        <h2>No book details available.</h2>
      )}
    </div>
  );
}

export default BookDetails;