  import { useNavigate } from 'react-router-dom';
  import blogs from '../../blogIndex'; // Assuming blogs is imported after parsing markdown files
  import "./AllBlogs.css"

  const AllBlogs = () => {
    const navigate = useNavigate();

    // Separate top 3 blogs and the rest of the blogs
    const topBlogs = blogs.slice(0, 3);
    const otherBlogs = blogs.slice(3);

    return (
      <div className="container mt-5">
        <h2 className="text-center mb-4 pt-5">All Blogs</h2>
        
        {/* Top 3 Blogs Container */}
        <div className="row mb-4">
          {topBlogs.map((blog, index) => (
            <div className="col-md-4 mb-3" key={index}>
              <div className="card1" onClick={() => navigate(`/blog/${index}`)}>
                <img src={blog.image} className="card1-img-top" alt={blog.title} />
                <div className="card1-body">
                  <h5 className="card1-title">{blog.title}</h5>
                  <p className="card1-text">{blog.summary}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Blogs Container */}
        <div className="other-blogs">
          <h4>Introduction to Other Blogs:</h4>
          {blogs.map((blog, index) => (
            <div className="blog-entry mb-3" key={index}>
              <h5 className="blog-title" onClick={() => navigate(`/blog/${index}`)}>
                {blog.title}
              </h5>
              <p className="blog-summary">{blog.summary}</p>
            </div>
          ))}
        </div>
        <div className="navigation-buttons">
  <button className="nav-button prev" onClick={() => navigate(-1)}>
    Previous
  </button>
  <button className="nav-button next" onClick={() => navigate(1)}>
    Next
  </button>
</div>
      </div>

      
    );
  };

  export default AllBlogs;
