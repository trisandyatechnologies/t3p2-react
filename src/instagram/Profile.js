import { Paper, Typography } from "@mui/material";
import { useParams, useSearchParams } from "react-router-dom";

export default function Profile() {
  const params = useParams();
  const [search] = useSearchParams();
  return (
    <Paper>
      <Typography variant="h1" style={{ color: search.get("color") }}>
        {params.user}
      </Typography>
    </Paper>
  );
}
