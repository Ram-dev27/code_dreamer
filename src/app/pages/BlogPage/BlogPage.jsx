import React from 'react';
import BlogCard from './components/BlogCard';
import { blogCardData } from '../../../data';

function BlogPage() {
  return (
    <>
      <h2 style={{ marginLeft: '30px' }}>Blogs</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
        {blogCardData.map((item) => (
          <BlogCard key={item.id} data={item} />
        ))}
      </div>
    </>
  );
}

export default BlogPage;
