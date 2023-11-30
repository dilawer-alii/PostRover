// CardDetail.js
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./PostDerails.css";
import axios from "axios";
import { useState } from "react";
const PostDetails = ({ cards }) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const { postId } = useParams();
  const post = posts.find((post) => post.id.toString() === postId);

  if (!post) {
    return <div>Card not found</div>;
  }

  return (
    <>
      <div className="container">
        <div className="header">Post Details</div>
        <div className="post-details">
          <h2 id="post-title">User Id</h2>
          <p id="post-body">{post.userId}</p>
          <h2 id="post-title">ID</h2>
          <p id="post-body">{post.id}</p>

          <h2 id="post-title"> Title</h2>
          <p id="post-body">{post.title}</p>
          <h2 id="post-title">Description</h2>
          <p id="post-body">{post.body}</p>
        </div>
        <Link to="/home" className="back-button">
          Back to Posts
        </Link>
      </div>
    </>
  );
};

export default PostDetails;
