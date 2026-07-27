function CourseDetails(props) {
  if (!props.courses || props.courses.length === 0) {
    return <h2>No course details available.</h2>;
  }

  return (
    <div className="details-column">
      <h1>Course Details</h1>

      {props.courses.map((course) => (
        <div className="detail-item" key={course.id}>
          <h2>{course.name}</h2>
          <p>{course.date}</p>
        </div>
      ))}
    </div>
  );
}

export default CourseDetails;