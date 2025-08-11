import React, { useState } from "react";
import {
  Avatar,
  Box,
  Container,
  Paper,
  Typography,
  Button,
  TextField,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormControl,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleMouseDownPassword = (event) => event.preventDefault();
  const handleMouseUpPassword = (event) => event.preventDefault();
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (props.onLogin) {
      props.onLogin({ email, password });  // Pass email and password up
    }
  };

  return (
    <Container maxWidth="xs">
      <Paper
        elevation={0}
        sx={{
          mt: 18,
          p: 4,
          backgroundColor: "rgba(255, 255, 255, 0.05)", 
          backdropFilter: "blur(8px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          borderRadius: 2,
        }}
      >
        <Avatar sx={{ m: "auto", bgcolor: " #f9a316" }} />
        <Typography
          variant="h5"
          align="center"
          sx={{ mb: 2, p: 2, color: "white" }}
        >
          Admin Login
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            placeholder="Enter your email"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "rgba(255, 255, 255, 0.6)" },
                "&:hover fieldset": { borderColor: "rgba(255, 255, 255, 0.6)" },
                "&.Mui-focused fieldset": {
                  borderColor: "#f9a316",
                },
              },
              "& .MuiInputLabel-root": {
                color: "rgba(255, 255, 255, 0.6)",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "white",
              },
              input: {
                color: "white",
              },
            }}
          />

          <FormControl
            fullWidth
            margin="normal"
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "rgba(255, 255, 255, 0.6)" },
                "&:hover fieldset": { borderColor: "rgba(255, 255, 255, 0.6)" },
                "&.Mui-focused fieldset": {
                  borderColor: "#f9a316",
                },
              },
              "& .MuiInputLabel-root": {
                color: "rgba(255, 255, 255, 0.6)",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "white",
              },
              input: {
                color: "white",
              },
            }}
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label={
                      showPassword ? "hide the password" : "show the password"
                    }
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    onMouseUp={handleMouseUpPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              placeholder="Enter your password"
              label="Password"
            />
          </FormControl>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              bgcolor: " #f9a316",
              color: "black",
              "&:hover": { bgcolor: "#daa520", color: "white" },
            }}
          >
            Sign In
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Login;
