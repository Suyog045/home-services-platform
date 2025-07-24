import { Box, Grid, Card, CardContent, Typography } from "@mui/material";
import Header from "../../components/Header";
import MyLine from "../../components/LineChart";
import MyBar from "../../components/BarChart";
import MyPie from "../../components/PieChart";
import ScreenSearchDesktopOutlinedIcon from "@mui/icons-material/ScreenSearchDesktopOutlined";
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import PendingActionsOutlinedIcon from "@mui/icons-material/PendingActionsOutlined";

// Shared card styles
const cardStyles = {
  height: "90%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "transparent",
  boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.12)",
  border: "1.5px solid rgba(0, 0, 0, 0.15)",
  borderRadius: "12px",
};

// Reusable Stat Card Component
const StatCard = ({ label, value, icon, iconBg, gap = 10 }) => (
  <Card sx={cardStyles}>
    <CardContent>
      <Typography>{label}</Typography>
      <Typography
        sx={{ color: "text.secondary" }}
        gutterBottom
        variant="h5"
        component="div"
        display="flex"
        alignItems="center"
        gap={gap}
      >
        {value}
        <Box
          sx={{
            backgroundColor: iconBg,
            borderRadius: "50%",
            padding: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
          }}
        >
          {icon}
        </Box>
      </Typography>
    </CardContent>
  </Card>
);

const Dashboard = () => {
  return (
    <Box m="20px">
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
        <Header title="DASHBOARD" subtitle="Welcome to admin dashboard" />
      </Box>

      {/* Top Stats Cards */}
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <StatCard
            label="Visits"
            value="65,122"
            icon={<ScreenSearchDesktopOutlinedIcon />}
            iconBg="#1976d2"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <StatCard
            label="Total Revenue"
            value="Rs 45,000"
            icon={<CurrencyRupeeOutlinedIcon />}
            iconBg="#1976d2"
            gap={7}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <StatCard
            label="Partners"
            value="2,378"
            icon={<PeopleAltOutlinedIcon />}
            iconBg="#1976d2"
            gap={12}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <StatCard
            label="Pending Requests"
            value="112"
            icon={<PendingActionsOutlinedIcon />}
            iconBg="#f57c00"
            gap={14}
          />
        </Grid>
      </Grid>

      {/* Chart Section */}
      <Box sx={{ width: "100%", mt: 4 }}>
        <Card
          sx={{
            backgroundColor: "transparent",
            border: "1.5px solid rgba(0, 0, 0, 0.15)",
            borderRadius: "12px",
          }}
        >
          <CardContent>
            <Typography variant="h6" mb={2}>
              Analytics Overview
            </Typography>

            {/* Line Chart */}
            <Box sx={{ height: 400, width: "100%", mb: 15 }}>
              <MyLine />
            </Box>

            {/* Bar & Pie Side by Side */}
            <Box sx={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <Box sx={{ flex: 1, minWidth: 300 }}>
                <Typography variant="subtitle1" mb={1}>
                  Category Overview
                </Typography>
                <Box sx={{ height: 300 }}>
                  <MyBar />
                </Box>
              </Box>

              <Box sx={{ flex: 1, minWidth: 300 }}>
                <Typography variant="subtitle1" mb={1}>
                  Service Distribution
                </Typography>
                <Box sx={{ height: 300 }}>
                  <MyPie />
                </Box>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default Dashboard;
