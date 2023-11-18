import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { MenuItem, Paper, Select } from "@mui/material";
import useLogin from "@/hooks/useLogin";
import useRegister from "@/hooks/useRegister";

export default function AuthForm({ user, setUser }) {
  const [toggle, setToggle] = useState(true);
  const { login, loginError, loginIsLoading } = useLogin();
  const { register, registerError, registerIsLoading } = useRegister();

  const calculateAge = (e) => {
    const age = Math.abs(
      new Date(
        new Date() - new Date(new FormData(e.currentTarget).get("dateOfBirth"))
      ).getUTCFullYear() - 1970
    );
    return age;
  };

  const loginUser = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const mobile = formData.get("mobile");
    const password = formData.get("password");

    if (email || mobile) {
      await login(email, mobile, password);
    } else {
      alert("Require email or mobile");
    }
  };

  const registerUser = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const mobile = formData.get("mobile");
    const dateOfBirth = formData.get("dateOfBirth");
    const age = calculateAge(e);
    const gender = formData.get("gender");
    const campus = formData.get("campus");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");

    if (password !== confirmPassword) alert("Passwords do not match");
    else {
      const res = await register(
        name,
        email,
        mobile,
        dateOfBirth,
        age,
        gender,
        campus,
        password
      );
    }
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
      maxWidth="xs"
    >
      {toggle ? (
        <Paper elevation={12} style={{ padding: 24 }}>
          <Typography component="h1" variant="h5">
            Existing User
          </Typography>
          <Box component="form" onSubmit={loginUser} noValidate>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              type="email"
              name="email"
              // autoComplete="email"
              autoFocus
            />
            <Typography component="p" color={"GrayText"} textAlign="center">
              Or
            </Typography>
            <TextField
              margin="normal"
              required
              fullWidth
              id="mobile"
              label="Mobile"
              type="phone"
              name="mobile"
              // autoComplete="mobile"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              style={{ margin: "1rem 0" }}
              disabled={loginIsLoading}
            >
              Login
            </Button>
            <Typography>{loginError}</Typography>
            <Button
              variant="text"
              onClick={() => setToggle(!toggle)}
              disabled={loginIsLoading}
            >
              New user? Register here
            </Button>
          </Box>
        </Paper>
      ) : (
        <Paper elevation={12} style={{ padding: 24 }}>
          <Typography component="h1" variant="h5">
            New User
          </Typography>
          <Box component="form" onSubmit={registerUser} noValidate>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              type="text"
              name="name"
              // autoComplete="name"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              type="email"
              name="email"
              // autoComplete="email"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="mobile"
              label="Mobile"
              type="tel"
              name="mobile"
              // autoComplete="mobile"
            />
            <label style={{ color: "GrayText", fontFamily: "Roboto" }}>
              Date of Birth
            </label>
            <TextField
              margin="normal"
              required
              fullWidth
              id="dateOfBirth"
              type="date"
              name="dateOfBirth"
              // autoComplete="date-of-birth"
            />
            <TextField
              select
              margin="normal"
              required
              fullWidth
              name="gender"
              label="Gender"
              type="text"
              id="gender"
            >
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
            </TextField>
            <TextField
              select
              margin="normal"
              required
              fullWidth
              name="campus"
              label="Campus"
              type="text"
              id="campus"
            >
              <MenuItem value="Marathahalli, Bengaluru">
                Marathahalli, Bengaluru
              </MenuItem>
              <MenuItem value="BTM Layout, Bengaluru">
                BTM Layout, Bengaluru
              </MenuItem>
              <MenuItem value="Chennai">Chennai</MenuItem>
              <MenuItem value="Trichy">Trichy</MenuItem>
            </TextField>
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              // autoComplete="password"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              id="confirmPassword"
              // autoComplete="password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              style={{ margin: "1rem 0" }}
              disabled={registerIsLoading}
            >
              Register
            </Button>
            <Typography>{registerError}</Typography>
            <Button
              variant="text"
              onClick={() => setToggle(!toggle)}
              disabled={registerIsLoading}
            >
              Existing user? Login here
            </Button>
          </Box>
        </Paper>
      )}
    </Container>
  );
}
