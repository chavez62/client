import React from 'react';

const PostList = ({ posts }) => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-3xl font-extrabold mb-6 text-white">Blog Posts</h2>
      <ul className="space-y-6">
        {posts.map(post => (
          <li key={post._id} className="p-6 border rounded-lg shadow-lg bg-white">
            <h3 className="text-2xl font-semibold text-gray-900">{post.title}</h3>
            <p className="mt-4 text-gray-700">{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
