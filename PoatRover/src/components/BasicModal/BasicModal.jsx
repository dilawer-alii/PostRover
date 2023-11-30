import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import { Create } from "@mui/icons-material";
import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: "absolute",
  borderRadius:"15px",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid #5d5959",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props) {
  const { newPost, setNewPost, createPost, open, setOpen, handleOpen, handleClose } =
    props;

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
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
            <div style={{marginLeft:"400px"}}>
            <CloseIcon color="error"/></div>
            <h2 style={{ marginLeft: "30px" }}> Create New Post</h2>
            <TextField
              sx={{ width: "400px", margin: "10px" }}
              id="outlined-basic"
              label="title"
              variant="outlined"
              value={newPost.title}
              onChange={(e) =>
                setNewPost({ ...newPost, title: e.target.value })
              }
            />
            <TextField
              sx={{ width: "400px", margin: "10px" }}
              id="outlined-basic"
              label="description"
              variant="outlined"
              value={newPost.body}
              onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
            />
            <Button
              onClick={createPost}
              variant="outlined"
              endIcon={<Create />}
            >
              Create
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
