import React, { useState } from 'react';
import axios from 'axios';

const Comments = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/posts/${postId}/comments`);
      setComments(response.data);
    } catch (error) {
      console.error('There was an error fetching the comments!', error);
    }
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:5000/api/posts/${postId}/comments`, { content: comment });
      setComments([...comments, response.data]);
      setComment('');
    } catch (error) {
      console.error('There was an error posting the comment!', error);
    }
  };

  return (
    <div className="mt-8">
      <h3 className="text-2xl font-extrabold mb-4">Comments</h3>
      <form onSubmit={handleCommentSubmit} className="mb-4">
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Add a comment"
          className="w-full p-2 border rounded mt-1 border-purple-500 focus:ring-purple-500 focus:border-purple-500 transition duration-300"
          required
        ></textarea>
        <button type="submit" className="button-enhanced">Submit</button>
      </form>
      <ul className="space-y-4">
        {comments.map(comment => (
          <li key={comment._id} className="p-4 border rounded bg-white">
            <p>{comment.content}</p>
            <p className="text-sm text-gray-500">{new Date(comment.date).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;
