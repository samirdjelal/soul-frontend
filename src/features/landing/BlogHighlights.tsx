// src/features/landing/BlogHighlights.tsx
import React from 'react';
import './BlogHighlights.css';

const BlogHighlights = () => {
  return (
    <section className="blog-section">
      <div className="container-wrapper">
        <div className="blog-header">
          <h2 className="blog-title">Explore the Startup Mindset</h2>
          <p className="blog-subtitle">Learn what it takes to turn a simple idea into a scalable business.</p>
        </div>

        <div className="blog-grid">
          <div className="blog-card">
            <img src="/home/blogs/blog1.png" alt="Building a Startup from Scratch" className="blog-image" />
            <div className="blog-meta">
              <span className="blog-badge red">Entrepreneurship</span>
              <span className="blog-time">5 min read</span>
            </div>
            <h3 className="blog-headline">Building a Startup from Scratch</h3>
            <p className="blog-desc">Learn the essential steps to launch your own startup successfully.</p>
            <a href="/blogs/building-startup-from-scratch" className="blog-link">Read more →</a>
          </div>

          <div className="blog-card">
            <img src="/home/blogs/blog2.png" alt="The Future of Tech Startups" className="blog-image" />
            <div className="blog-meta">
              <span className="blog-badge blue">Innovation</span>
              <span className="blog-time">5 min read</span>
            </div>
            <h3 className="blog-headline">The Future of Tech Startups</h3>
            <p className="blog-desc">Discover emerging trends shaping the technology startup landscape today.</p>
            <a href="/blogs/the-future-of-tech-startups" className="blog-link">Read more →</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHighlights;
