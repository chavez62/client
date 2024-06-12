import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostList from './components/PostList';
import CreatePost from './components/CreatePost';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/posts');
      // Sort posts by creation date, newest first
      const sortedPosts = response.data.sort((a, b) => new Date(b.date) - new Date(a.date));
      setPosts(sortedPosts);
    } catch (error) {
      console.error('There was an error fetching the posts!', error);
    }
  };

  const addPost = (newPost) => {
    // Prepend the new post to the beginning of the posts array
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="min-h-screen bg-custom-gradient flex flex-col">
      <Navbar />
      <main className="flex-grow p-4">
        <CreatePost addPost={addPost} />
        <PostList posts={posts} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
