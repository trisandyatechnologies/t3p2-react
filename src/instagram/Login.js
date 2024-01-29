import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useUserStore } from "./store";
import { Alert } from "@mui/material";

export default function Login({ onSubmit }) {
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const setUser = useUserStore((s) => s.setUser);
  const loginError = useUserStore((s) => s.error);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    if (loginError) {
      setOpen(true);
    }
  }, [loginError]);

  return (
    <React.Fragment>
      <Button onClick={handleClickOpen}>Login</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            setUser({ email });
            handleClose();
          },
        }}
      >
        <DialogTitle>Login</DialogTitle>
        {loginError && <Alert severity="error">{loginError}</Alert>}
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Submit</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
