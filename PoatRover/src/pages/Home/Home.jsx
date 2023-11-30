import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import Modal from "@mui/material/Modal";
import HomeNavbar from "../../components/HomeNavbar/HomeNavbar";
import { toast } from "react-toastify";
import {
  Autocomplete,
  Avatar,
  Box,
  Button,
  Card,
  CardHeader,
  IconButton,
  Menu,
  MenuItem,
  TextField,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { red } from "@mui/material/colors";
import { Create, Delete, Update } from "@mui/icons-material";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [displayCount, setDisplayCount] = useState(6);
  const [newPost, setNewPost] = useState({
    title: "",
    body: "",
  });
  const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState({
    title: "",
    body: "",
  });
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [menuAnchor, setMenuAnchor] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = response.data;
        setPosts(data.slice(0, displayCount));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [displayCount]);

  const handleReadMore = () => {
    setDisplayCount((prevCount) => prevCount + 6);
  };

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const createPost = async () => {
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        newPost
      );
      setPosts([...posts, response.data]);
      console.log(posts);
      toast.success("Post created");
      setNewPost({
        title: "",
        body: "",
      });
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  const openUpdateModal = (post) => {
    setSelectedPost(post);
    setUpdateModalOpen(true);
  };

  const closeUpdateModal = () => {
    setUpdateModalOpen(false);
  };

  const updatePost = async (updatedPost) => {
    try {
      const response = await axios.put(
        `https://jsonplaceholder.typicode.com/posts/${selectedPost.id}`,
        updatedPost
      );
      const updatedPosts = posts.map((post) =>
        post.id === selectedPost.id ? response.data : post
      );
      setPosts(updatedPosts);
      toast.info("Post updated");
      closeUpdateModal();
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };


  const handleMenuClick = (event) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
  };
  const deletePost = async (postId) => {
    try {
      await axios.delete(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );
      const updatedPosts = posts.filter((post) => post.id !== postId);
      setPosts(updatedPosts);
      toast.error("Post deleted");
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  return (
    <>
      <HomeNavbar
        createPost={createPost}
        newPost={newPost}
        setNewPost={setNewPost}
      />
      <div>
        <div></div>

        <div>
          <h2 style={{ textAlign: "center", marginTop: "5%" }}>
            Existing Posts
          </h2>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {posts.map((post) => (
              <div key={post.id}>
                <Card
                  style={{ margin: "20px", height: "250px", width: "343px" }}
                  sx={{
                    transition: "box-shadow 0.3s", // Add transition for a smooth effect
                    border: "1px solid #d7d7d7",
                    "&:hover": {
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.4)",
                      maxWidth: 345,
                    },
                  }}
                >
                  <Link
                    to={`/post/${post.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <CardHeader
                      avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                          R
                        </Avatar>
                      }
                      title={post.title}
                      subheader={post.body}
                    />
                  </Link>
                  <div>
                    <Button
                      sx={{
                        padding: "2px",
                        marginRight: "10px",
                        marginLeft: "70px",
                      }}
                      size="small"
                      color="primary"
                      onClick={() => openUpdateModal(post)}
                      variant="outlined"
                      endIcon={<Update />}
                    >
                      Update
                    </Button>
                    <Button
                      sx={{ padding: "2px" }}
                      color="error"
                      size="small"
                      onClick={() => deletePost(post.id)}
                      variant="outlined"
                      endIcon={<Delete />}
                    >
                      Delete
                    </Button>
                  </div>
                </Card>
              </div>
            ))}
          </div>
          {posts.length > 0 && (
            <Button
              sx={{ marginLeft: "120px", marginBottom: "50px" }}
              variant="contained"
              onClick={handleReadMore}
            >
              View More
            </Button>
          )}
        </div>

        <Modal
          open={isUpdateModalOpen}
          onClose={closeUpdateModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                margin: "30px",
              }}
            >
              <h2 style={{ marginLeft: "30px" }}> Update Post</h2>
              <TextField
                sx={{ width: "400px", margin: "10px" }}
                id="outlined-basic"
                label="title"
                variant="outlined"
                value={selectedPost.title}
                onChange={(e) =>
                  setSelectedPost({ ...selectedPost, title: e.target.value })
                }
              />
              <TextField
                sx={{ width: "400px", margin: "10px" }}
                id="outlined-basic"
                label="description"
                variant="outlined"
                value={selectedPost.body}
                onChange={(e) =>
                  setSelectedPost({ ...selectedPost, body: e.target.value })
                }
              />
              <Button
                onClick={() => updatePost(selectedPost)}
                variant="outlined"
                endIcon={<Update />}
              >
                Update
              </Button>
            </div>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default Home;
