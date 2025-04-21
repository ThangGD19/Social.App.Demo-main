import React, { useState } from "react";
import {
  Avatar,
  Button,
  Box,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  CircularProgress,
} from "@mui/material";
import Post from "./Post";
import { useSnackbar } from "notistack";

const PostList = () => {
  const [open, setOpen] = useState(false);
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const { enqueueSnackbar } = useSnackbar();

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setCaption("");
    setImage("");
  };

  const handlePost = () => {
    if (!caption.trim()) {
      enqueueSnackbar("Bạn chưa nhập nội dung!", { variant: "warning" });
      return;
    }
    setLoading(true);

    setTimeout(() => {
      setPosts((prev) => [
        {
          caption,
          img: image,
          like: 0,
          comment: 0,
          view: 0,
          share: 0,
        },
        ...prev,
      ]);
      setLoading(false);
      enqueueSnackbar("Đăng bài thành công!", { variant: "success" });
      handleClose();
    }, 1000);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <Box maxWidth={"600px"} mx="auto" display="flex" flexDirection="column" gap="20px">
      {/* Tạo bài viết */}
      <Box bgcolor="#16181C" borderRadius="50px" p={2}>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box display="flex" alignItems="center" gap="16px">
            <Avatar src="https://images.unsplash.com/photo-1527980965255-d3b416303d12" />
            <Typography
              variant="body1"
              color="#808080"
              fontWeight="600"
              onClick={handleClickOpen}
              sx={{ cursor: "pointer" }}
            >
              Bắt đầu nimbus...
            </Typography>
          </Box>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#6EC207", color: "#f5f5f5", borderRadius: "25px" }}
            onClick={handleClickOpen}
          >
            Đăng
          </Button>
        </Box>
      </Box>

      {/* Dialog */}
      <Dialog open={open} onClose={handleClose}>
        <Box component="form" sx={{ backgroundColor: "#16181c", width: "400px" }}>
          <DialogTitle color="#f5f5f5">Tạo bài viết</DialogTitle>
          <DialogContent>
            <TextField
              label="Bạn đang nghĩ gì?"
              fullWidth
              multiline
              rows={3}
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              sx={{
                mt: 2,
                "& .MuiInputBase-root": { color: "#f5f5f5" },
                "& .MuiInputLabel-root": { color: "#808080" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#808080" },
                  "&:hover fieldset": { borderColor: "#f5f5f5" },
                  "&.Mui-focused fieldset": { borderColor: "#f5f5f5" },
                },
              }}
            />

            <Button variant="outlined" component="label" sx={{ mt: 2 }}>
              Chọn ảnh
              <input hidden accept="image/*" type="file" onChange={handleImageChange} />
            </Button>

            {image && (
              <Box mt={2}>
                <img
                  src={image}
                  alt="preview"
                  style={{ width: "100%", borderRadius: "15px" }}
                />
              </Box>
            )}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Hủy</Button>
            <Button onClick={handlePost} disabled={loading}>
              {loading ? <CircularProgress size={20} /> : "Đăng"}
            </Button>
          </DialogActions>
        </Box>
      </Dialog>

      {/* Danh sách bài viết */}
      {posts.map((item, index) => (
        <Post key={index} {...item} />
      ))}
    </Box>
  );
};

export default PostList;
