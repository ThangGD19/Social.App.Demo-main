import { Box, Container, Grid2 } from "@mui/material";
import React from "react";
import PostList from "../components/PostList";  // Correct default import
import Sidebar from "../components/SideBar";
import Suggestions from "../components/Suggestions";

export const Home = () => {
  return (
    <Container maxWidth="xl" sx={{ marginTop: "80px", marginBottom: "40px" }}>
      <Grid2 container>
        <Grid2 size={{ md: 3 }}>
          <Sidebar />
        </Grid2>
        <Grid2 size={{ md: 6 }}>
          <PostList />
        </Grid2>
        <Grid2 size={{ md: 3 }}>
          <Suggestions />
        </Grid2>
      </Grid2>
    </Container>
  );
};
