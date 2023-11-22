import { LogoutTwoTone } from "@mui/icons-material";
import {
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import useLogout from "../hooks/useLogout";
import { useState } from "react";

const Navbar = ({ user }) => {
  const { logout } = useLogout();
  const [toggle, setToggle] = useState(false);
  return (
    <nav>
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* {user.role === "ptl" ? (
          <ul>
            <li>Profile</li>
            <li>Sub-connect Group</li>
            <li>Add member</li>
          </ul>
        ) : (
          <ul>
            <li>Logout</li>
          </ul>
        )} */}
        <Typography>Lifehouse Church</Typography>
        <IconButton onClick={() => setToggle(!toggle)}>
          <LogoutTwoTone />
        </IconButton>
        <Dialog open={toggle}>
          <DialogTitle id="alert-dialog-title">Alert</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Are you sure you want to logout?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setToggle(!toggle)}>Cancel</Button>
            <Button onClick={() => logout()} autoFocus>
              Logout
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </nav>
  );
};

export default Navbar;
