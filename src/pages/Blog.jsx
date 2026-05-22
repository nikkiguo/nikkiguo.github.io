import { Link } from 'react-router-dom'
import { blogPosts } from '../data/blogData'

export default function Blog() {
  return (
    <>
      <section className="blog-header">
        <div className="container">
          <h1>Blog</h1>
          <p className="blog-subtitle">Coming Soon!</p>
        </div>
      </section>

      <section className="blog">
        <div className="container">
          <div className="blog-posts">
            {blogPosts.map((post) => (
              <article key={post.id} className="blog-post">
                <div className="post-meta">
                  <span className="post-date">{post.date}</span>
                  <span className="post-category">{post.category}</span>
                </div>
                <h2>
                  <Link to={`/blog/${post.id}`}>{post.title}</Link>
                </h2>
                <p className="post-excerpt">{post.excerpt}</p>
                <Link to={`/blog/${post.id}`} className="read-more">Read More →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
