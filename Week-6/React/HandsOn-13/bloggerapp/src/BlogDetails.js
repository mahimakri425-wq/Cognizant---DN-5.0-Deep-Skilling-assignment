function BlogDetails(props) {
  const hasBlogs = props.blogs && props.blogs.length > 0;

  return (
    <div className="details-column bordered-column">
      <h1>Blog Details</h1>

      {hasBlogs &&
        props.blogs.map((blog) => (
          <div className="detail-item" key={blog.id}>
            <h2>{blog.title}</h2>
            <h4>{blog.author}</h4>
            <p>{blog.description}</p>
          </div>
        ))}

      {!hasBlogs && <h2>No blog details available.</h2>}
    </div>
  );
}

export default BlogDetails;