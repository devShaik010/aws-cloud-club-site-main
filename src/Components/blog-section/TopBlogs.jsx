import { useNavigate } from 'react-router-dom';
import blogs from '../../blogIndex'; // Index of all blog markdown files

const TopBlogs = () => {
  const navigate = useNavigate();
  const top3Blogs = blogs.slice(0, 3); // Get top 3 blogs

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Top 3 Blogs</h2>
      <div className="row">
        {top3Blogs.map((blog, index) => (
          <div className="col-md-4" key={index}>
            <div className="card mb-3" onClick={() => navigate(`/blog/${index}`)}>
              <img 
                src={blog.image} // Get the image from the markdown file's front matter
                alt={blog.title} 
                className="card-img-top" 
                style={{ height: '200px', objectFit: 'cover' }} // Adjust image size and fit
              />
              <div className="card-body">
                <h5 className="card-title">{blog.title}</h5>
                <p className="card-text">{blog.summary}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBlogs;
