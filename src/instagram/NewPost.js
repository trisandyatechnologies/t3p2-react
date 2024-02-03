import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { usePostStore, useUserStore } from "./store";
import { useNavigate } from "react-router-dom";

export default function NewPost() {
  const [image, setImage] = useState("");
  const [caption, setCaption] = useState("");

  const createPost = usePostStore((s) => s.createPost);
  const userName = useUserStore((s) => s.name);
  const userImage = useUserStore((s) => s.image);
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    const user = {
      name: userName,
      image: userImage,
    };
    const images = [image];

    createPost(user, images, caption);
    setCaption("");
    setImage("");
    navigate("/");
  };
  return (
    <Box
      component="form"
      onSubmit={onSubmit}
      sx={{ display: "flex", gap: 4, flexDirection: "column" }}
    >
      <TextField
        label="Caption"
        fullWidth
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
      />
      <TextField
        label="Image"
        fullWidth
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button type="submit" variant="contained">
        Submit
      </Button>
    </Box>
  );
}
