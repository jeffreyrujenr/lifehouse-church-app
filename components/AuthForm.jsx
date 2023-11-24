import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {
  CircularProgress,
  Dialog,
  DialogContent,
  MenuItem,
  Paper,
  Select,
} from "@mui/material";
import useLogin from "@/hooks/useLogin";
import useRegister from "@/hooks/useRegister";
import { AppRegistrationTwoTone, LoginTwoTone } from "@mui/icons-material";
import validator from "validator";

export default function AuthForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [campus, setCampus] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { register, registerError, registerIsLoading } = useRegister();
  const { login, loginError, loginIsLoading } = useLogin();
  const [authError, setAuthError] = useState("");
  const [toggle, setToggle] = useState(false);
  const [toggleDialog, setToggleDialog] = useState(false);

  const calculateAge = (dateOfBirth) => {
    const diff =
      new Date(new Date() - new Date(dateOfBirth)).getUTCFullYear() - 1970;
    let age;
    if (diff > 1) age = `${Math.abs(diff)} years`;
    else age = `${diff} months`;
    return age;
  };

  const loginUser = async () => {
    const errors = [];
    if (!(email || mobile)) {
      errors.push("Email/Mobile must be filled");
    }
    if (email && !validator.isEmail(email)) {
      errors.push("Email is not valid");
    }
    if (mobile && (!validator.isMobilePhone(mobile) || mobile.length !== 10)) {
      errors.push("Mobile is not valid");
    }
    if (!password) {
      errors.push("Password must be filled");
    }
    if (errors.length > 0) {
      setAuthError(errors[0]);
    } else {
      setAuthError("");
      setToggleDialog(true);
      try {
        await login(email, mobile, password);
      } catch (error) {
        console.error("Login error:", error);
        setAuthError("An error occurred during login");
      }
    }
  };

  const registerUser = async () => {
    const errors = [];

    if (!name) errors.push("Name must be filled");
    if (!email) errors.push("Email must be filled");
    if (!mobile) errors.push("Mobile must be filled");
    if (!dateOfBirth) errors.push("Date of Birth must be filled");
    if (new Date(dateOfBirth) > new Date())
      errors.push("Date of Birth cannot be in the future");
    const age = calculateAge(dateOfBirth);
    if (!gender) errors.push("Gender must be filled");
    if (!campus) errors.push("Campus must be filled");
    if (!password) errors.push("Password must be filled");
    if (!confirmPassword) errors.push("Confirm password must be filled");
    if (!validator.isEmail(email)) errors.push("Email is not valid");
    if (!validator.isMobilePhone(mobile) && mobile.length !== 10)
      errors.push("Mobile is not valid");
    if (!validator.isStrongPassword(password)) {
      errors.push(
        "Password is not strong enough. Use a combination of lowercase & uppercase letters, numbers and symbols. Minimum 8 characters long"
      );
    }
    if (password !== confirmPassword) errors.push("Passwords are not matching");

    if (errors.length > 0) {
      setAuthError(errors[0]);
    } else {
      setAuthError("");
      setToggleDialog(true);
      try {
        await register(
          name,
          email,
          mobile,
          dateOfBirth,
          age,
          gender,
          campus,
          password
        );
      } catch (error) {
        console.error("Registration error:", error);
        setAuthError("An error occurred during registration");
      }
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
          <Box>
            <TextField
              variant="filled"
              size="small"
              margin="dense"
              required
              fullWidth
              id="email"
              label="Email"
              type="email"
              name="email"
              autoFocus
              onChange={(e) => setEmail(e.target.value)}
            />
            <Typography component="p" color={"GrayText"} textAlign="center">
              Or
            </Typography>
            <TextField
              variant="filled"
              size="small"
              margin="dense"
              required
              fullWidth
              id="mobile"
              label="Mobile"
              type="tel"
              name="mobile"
              onChange={(e) => setMobile(e.target.value)}
            />
            <TextField
              variant="filled"
              size="small"
              margin="dense"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              style={{ margin: "1rem 0" }}
              onClick={(e) => {
                e.preventDefault();
                loginUser();
              }}
              endIcon={loginIsLoading ? <CircularProgress /> : <LoginTwoTone />}
            >
              Login
            </Button>
            {authError && (
              <Typography
                sx={{
                  padding: "1rem",
                  color: "red",
                  border: "1px solid red",
                  borderRadius: "0.25rem",
                }}
              >
                {authError}
              </Typography>
            )}
            {loginError && (
              <Typography
                sx={{
                  padding: "1rem",
                  color: "red",
                  border: "1px solid red",
                  borderRadius: "0.25rem",
                }}
              >
                {loginError}
              </Typography>
            )}
            <Button
              variant="text"
              onClick={() => setToggle(!toggle)}
              disabled={loginIsLoading}
            >
              New user? Register here
            </Button>
          </Box>
          <Dialog open={toggleDialog}>
            <DialogContent
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <CircularProgress />
              <br />
              Logging in
            </DialogContent>
          </Dialog>
        </Paper>
      ) : (
        <Paper elevation={12} style={{ padding: 24 }}>
          <Typography component="h1" variant="h5">
            New User
          </Typography>
          <Box>
            <TextField
              variant="filled"
              size="small"
              margin="dense"
              required
              fullWidth
              id="name"
              label="Full name"
              type="text"
              name="name"
              autoFocus
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              variant="filled"
              size="small"
              margin="dense"
              required
              fullWidth
              id="email"
              label="Email"
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              variant="filled"
              size="small"
              margin="dense"
              required
              fullWidth
              id="mobile"
              label="Mobile"
              type="tel"
              name="mobile"
              onChange={(e) => setMobile(e.target.value)}
            />
            <label
              style={{
                color: "GrayText",
                fontFamily: "Roboto",
              }}
            >
              Date of Birth
            </label>
            <TextField
              variant="filled"
              size="small"
              margin="dense"
              required
              fullWidth
              id="dateOfBirth"
              type="date"
              name="dateOfBirth"
              onChange={(e) => setDateOfBirth(e.target.value)}
            />
            <TextField
              select
              variant="filled"
              size="small"
              margin="dense"
              required
              fullWidth
              name="gender"
              label="Gender"
              type="text"
              id="gender"
              onChange={(e) => setGender(e.target.value)}
            >
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
            </TextField>
            <TextField
              select
              variant="filled"
              size="small"
              margin="dense"
              required
              fullWidth
              name="campus"
              label="Campus"
              type="text"
              id="campus"
              onChange={(e) => setCampus(e.target.value)}
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
              variant="filled"
              size="small"
              margin="dense"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
              variant="filled"
              size="small"
              margin="dense"
              required
              fullWidth
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              id="confirmPassword"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              style={{ margin: "1rem 0" }}
              onClick={(e) => {
                e.preventDefault();
                registerUser();
              }}
              endIcon={
                loginIsLoading ? (
                  <CircularProgress />
                ) : (
                  <AppRegistrationTwoTone />
                )
              }
            >
              Register
            </Button>
            {authError && (
              <Typography
                sx={{
                  padding: "1rem",
                  color: "red",
                  border: "1px solid red",
                  borderRadius: "0.25rem",
                }}
              >
                {authError}
              </Typography>
            )}
            {registerError && (
              <Typography
                sx={{
                  padding: "1rem",
                  color: "red",
                  border: "1px solid red",
                  borderRadius: "0.25rem",
                }}
              >
                {registerError}
              </Typography>
            )}
            <Button
              variant="text"
              onClick={() => setToggle(!toggle)}
              disabled={registerIsLoading}
            >
              Existing user? Login here
            </Button>
          </Box>
          <Dialog open={toggleDialog}>
            <DialogContent
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <CircularProgress />
              <br />
              Registering user
            </DialogContent>
          </Dialog>
        </Paper>
      )}
    </Container>
  );
}
