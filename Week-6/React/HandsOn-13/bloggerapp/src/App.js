import "./App.css";

import CourseDetails from "./CourseDetails";
import BookDetails from "./BookDetails";
import BlogDetails from "./BlogDetails";

import { books, blogs, courses } from "./Data";

function App() {
  const showCourseDetails = true;
  const showBookDetails = true;
  const showBlogDetails = true;

  return (
    <div className="app-container">
      {showCourseDetails && (
        <CourseDetails courses={courses} />
      )}

      {showBookDetails ? (
        <BookDetails books={books} />
      ) : null}

      {showBlogDetails && (
        <BlogDetails blogs={blogs} />
      )}
    </div>
  );
}

export default App;