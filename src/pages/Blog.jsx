import React, { useEffect, useState } from "react";
import MarkdownRenderer from "../components/MarkdownRenderer";

const Blog = () => {
  const [postContent, setPostContent] = useState("");

  useEffect(() => {
    fetch("/src/posts/First-Post.md")
      .then((res) => res.text())
      .then((text) => setPostContent(text));
  }, []);

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Blog Post</h1>
      <MarkdownRenderer content={postContent} />
    </div>
  );
};

export default Blog;