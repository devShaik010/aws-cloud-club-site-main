import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import './BlogDetails.css'
const BlogDetail = () => {
  const { id } = useParams();
  const [content, setContent] = useState('');

  useEffect(() => {
    import(`../../blogs/blog${id}.md`)
      .then((res) => fetch(res.default))
      .then((res) => res.text())
      .then((text) => setContent(text))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="blog-container">
      <h1 className="blog-title">Blog Title Here</h1>
      <div className="blog-content">
        <ReactMarkdown children={content} remarkPlugins={[remarkGfm]} />
      </div>
    </div>
  );
};

export default BlogDetail;
