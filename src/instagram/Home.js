import { Box, Grid } from "@mui/material";
import Post from "./Post";
import RightSidebar from "./RightSidebar";
import { usePostStore } from "./store";

export default function Home() {
  const posts = usePostStore((s) => s.posts);
  return (
    <Grid container>
      <Grid item xs={12} md={7}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {posts.map((postData, i) => (
            <Post key={i} {...postData} />
          ))}
        </Box>
      </Grid>
      <Grid item xs={12} md={5}>
        <RightSidebar />
      </Grid>
    </Grid>
  );
}
