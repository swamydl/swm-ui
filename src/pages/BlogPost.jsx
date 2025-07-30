import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

const BlogPost = () => {
  const { slug } = useParams();
  const [content, setContent] = useState("");

  useEffect(() => {
    import(`../posts/${slug}.md`)
      .then((res) => {
        fetch(res.default)
          .then((r) => r.text())
          .then((text) => setContent(text));
      })
      .catch((err) => setContent("Post not found."));
  }, [slug]);

  return (
    <div className="max-w-3xl mx-auto p-4 prose dark:prose-invert">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default BlogPost;