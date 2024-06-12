import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetchPost();
  }, []);

  const fetchPost = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/posts/${id}`);
      setPost(response.data);
    } catch (error) {
      console.error('There was an error fetching the post!', error);
    }
  };

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-3xl font-extrabold mb-6 text-gray-800">{post.title}</h2>
      <p className="mt-2 text-sm text-gray-500">{new Date(post.date).toLocaleDateString()}</p>
      <p className="mt-4 text-gray-700">{post.content}</p>
    </div>
  );
};

export default PostDetail;
