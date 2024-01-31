import { Box, Grid } from "@mui/material";
import Post from "./Post";
import RightSidebar from "./RightSidebar";

export default function Home() {
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
          {[...new Array(3)].map((_, i) => (
            <Post key={i} />
          ))}
        </Box>
      </Grid>
      <Grid item xs={12} md={5}>
        <RightSidebar />
      </Grid>
    </Grid>
  );
}
