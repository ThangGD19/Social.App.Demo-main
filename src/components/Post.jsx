import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import { Box } from "@mui/material";

export default function Post({ caption, img, like, comment, view, share }) {
  const [likes, setLikes] = useState(like);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikes((prevLikes) => prevLikes - 1);
    } else {
      setLikes((prevLikes) => prevLikes + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <Card sx={{ maxWidth: "100%", bgcolor: "#16181C", borderRadius: "25px" }}>
      <CardHeader
        avatar={
          <Avatar
            src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="User Avatar"
          />
        }
        action={
          <IconButton aria-label="settings">
            <MoreHorizIcon sx={{ color: "#f5f5f5" }} />
          </IconButton>
        }
        title={
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography
              variant="body1"
              color="#f5f5f5"
              sx={{ fontWeight: 600 }}
            >
              Diogo Forlan
            </Typography>
            <Typography variant="body1" color="#808080">
              9 giờ trước
            </Typography>
          </Box>
        }
      />
      <Box sx={{ paddingLeft: "56px" }}>
        <CardContent sx={{ paddingTop: 0 }}>
          <Typography
            variant="body2"
            sx={{ maxWidth: "480px", color: "#f5f5f5" }}
          >
            {caption}
          </Typography>
        </CardContent>
        <Box sx={{ padding: "0 16px" }}>
          <CardMedia
            component="img"
            height="auto"
            image={img}
            alt="Paella dish"
            sx={{ borderRadius: "25px" }}
          />
        </Box>
        <CardActions disableSpacing sx={{ display: "flex", gap: "60px" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton aria-label="add to favorites" onClick={handleLike}>
              {isLiked ? (
                <FavoriteIcon
                  sx={{ fontSize: "20px", color: "#FF0000" }}
                />
              ) : (
                <FavoriteBorderOutlinedIcon
                  sx={{ fontSize: "20px", color: "#808080" }}
                />
              )}
            </IconButton>
            <Typography variant="body2" color="#808080">
              {likes}K
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton aria-label="comment">
              <ChatBubbleOutlineOutlinedIcon
                sx={{ fontSize: "20px", color: "#808080" }}
              />
            </IconButton>
            <Typography variant="body2" color="#808080">
              {comment}K
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton aria-label="trending view">
              <TrendingUpOutlinedIcon
                sx={{ fontSize: "20px", color: "#808080" }}
              />
            </IconButton>
            <Typography variant="body2" color="#808080">
              {view}M
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton aria-label="share">
              <ShareOutlinedIcon sx={{ fontSize: "20px", color: "#808080" }} />
            </IconButton>
            <Typography variant="body2" color="#808080">
              {share}K
            </Typography>
          </Box>
        </CardActions>
      </Box>
    </Card>
  );
}
