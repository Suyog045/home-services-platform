
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
  
    localStorage.clear();
    setTimeout(() => {
      navigate("/"); // redirect to login 
    }, 2000);
  }, [navigate]);

  return (
    <Box m="40px" textAlign="center">
      <Typography variant="h3">Logging you out...</Typography>
    </Box>
  );
};

export default Logout;
