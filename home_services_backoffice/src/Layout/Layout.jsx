import { Box } from "@mui/material";
import Sidebar from  "../scenes/global/Sidebar";
import Topbar from "../scenes/global/Topbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Box display="flex" height="100vh">
      <Sidebar />
      <Box flex="1" display="flex" flexDirection="column">
        <Topbar />
        <Box flex="1" overflow="auto" p={2}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
