import { LogoutTwoTone } from "@mui/icons-material";
import { Container, IconButton, Typography } from "@mui/material";
import useLogout from "../hooks/useLogout";

const Navbar = ({ user }) => {
  const { logout } = useLogout();
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
        <IconButton onClick={() => logout()}>
          <LogoutTwoTone />
        </IconButton>
      </Container>
    </nav>
  );
};

export default Navbar;
