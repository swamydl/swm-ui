import { Link } from "react-router-dom"

const BlogPage = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>

      {/* Example blog post links */}
      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold">Sample Blog Post</h2>
          <p>This is a sample blog post written in markdown.</p>
          <Link
            to="/blog/sample"
            className="text-blue-500 hover:underline"
          >
            Read more
          </Link>
        </div>

        <div>
          <h2 className="text-xl font-semibold">My Second Blog</h2>
          <p>Another demo blog post in markdown format.</p>
          <Link
            to="/blog/my-second-blog"
            className="text-blue-500 hover:underline"
          >
            Read more
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BlogPage