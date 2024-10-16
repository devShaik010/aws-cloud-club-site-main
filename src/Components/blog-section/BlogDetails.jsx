
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const BlogDetail = () => {
  const { id } = useParams();
  const [content, setContent] = useState('');
//   ../blogs/blog${id}.md
  useEffect(() => {
    import(`../../blogs/blog${id}.md`)
      .then((res) => fetch(res.default))
      .then((res) => res.text())
      .then((text) => setContent(text))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="container mt-5">
      <ReactMarkdown children={content} remarkPlugins={[remarkGfm]} />
    </div>
  );
};

export default BlogDetail;
