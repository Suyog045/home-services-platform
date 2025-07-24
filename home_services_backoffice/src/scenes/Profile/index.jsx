
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";

const Profile = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="PROFILE" subtitle="Admin Profile Information" />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        mt="30px"
        bgcolor={colors.primary[400]}
        p={4}
        borderRadius="12px"
      >
        <img
          src="../../assets/images.jpg"
          alt="profile"
          style={{
            width: "180px",
            height: "180px",
            borderRadius: "50%",
            marginBottom: "20px",
          }}
        />
        <Typography variant="h4" color={colors.grey[200]}>
          Mahboob Alam
        </Typography>
        <Typography variant="h6" color={colors.orangeYellowAccent[500]}>
          Full Stack Developer
        </Typography>
        <Typography variant="body1" mt={2} color={colors.grey[300]}>
          Email: mahboob@example.com
        </Typography>
        <Typography variant="body1" color={colors.grey[300]}>
          Phone: +91 9876543210
        </Typography>
      </Box>
    </Box>
  );
};

export default Profile;
