import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import PostList from './components/PostList';
import CreatePost from './components/CreatePost';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Search from './components/Search';
import Pagination from './components/Pagination';
import PostDetail from './components/PostDetail';
import Spinner from './components/Spinner';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:5000/api/posts');
      setPosts(response.data);
      setLoading(false);
    } catch (error) {
      console.error('There was an error fetching the posts!', error);
      setLoading(false);
    }
  };

  const addPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <Router>
      <div className="min-h-screen bg-custom-gradient flex flex-col">
        <Navbar />
        <main className="flex-grow p-4">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Search setSearchTerm={setSearchTerm} />
                  <CreatePost addPost={addPost} />
                  {loading ? <Spinner /> : <PostList posts={currentPosts} />}
                  <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={filteredPosts.length}
                    paginate={paginate}
                  />
                </>
              }
            />
            <Route path="/post/:id" element={<PostDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
