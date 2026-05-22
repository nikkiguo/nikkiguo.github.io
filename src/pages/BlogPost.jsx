import { useParams, Link } from 'react-router-dom'
import { blogPosts } from '../data/blogData'

export default function BlogPost() {
  const { id } = useParams()
  const post = blogPosts.find((p) => p.id === id)

  if (!post) {
    return (
      <section className="blog" style={{ background: '#fff' }}>
        <div className="container">
          <div className="post-content">
            <Link to="/blog" className="back-link">← Back to Blog</Link>
            <h1>Post not found</h1>
            <p>Sorry, the blog post you're looking for doesn't exist.</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="blog" style={{ background: '#fff' }}>
      <div className="post-content">
        <Link to="/blog" className="back-link">← Back to Blog</Link>

        <div className="post-meta">
          <span className="post-date">{post.date}</span>
          <span className="post-category">{post.category}</span>
        </div>

        <h1>{post.title}</h1>

        <div
          className="post-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #e2e8f0' }}>
          <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>
            Originally published on {post.date}
          </p>
        </div>
      </div>
    </section>
  )
}
