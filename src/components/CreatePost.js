import React, { useState } from 'react';
import axios from 'axios';

const CreatePost = ({ addPost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { title, content };

    axios.post('http://localhost:5000/api/posts', newPost)
      .then(response => {
        console.log(response.data);
        addPost(response.data);
        setTitle('');
        setContent('');
      })
      .catch(error => {
        console.error('There was an error creating the post!', error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-4 mb-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-extrabold mb-6 text-gray-800">Create a New Post</h2>
      <div className="mb-4">
        <label className="block text-lg font-medium text-gray-700">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded mt-1 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-lg font-medium text-gray-700">Content</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-2 border rounded mt-1 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
          required
        />
      </div>
      <button type="submit" className="button-enhanced">Create Post</button>
    </form>
  );
};

export default CreatePost;
