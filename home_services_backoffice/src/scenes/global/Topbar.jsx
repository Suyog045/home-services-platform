import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import Badge from "@mui/material/Badge";

import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent="flex-end" p={2}>
      <Box display="flex" alignItems="center" gap={1}>
        {/* Theme Toggle Icon */}
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon sx={{ color: colors.grey[100] }} />
          ) : (
            <LightModeOutlinedIcon sx={{ color: colors.grey[100] }} />
          )}
        </IconButton>

        {/* Notifications with Badge */}
        <IconButton>
          <Badge badgeContent={4} color="warning">
            <NotificationsOutlinedIcon sx={{ color: colors.grey[100] }} />
          </Badge>
        </IconButton>

        {/* Settings */}
        <IconButton>
          <SettingsOutlinedIcon sx={{ color: colors.grey[100] }} />
        </IconButton>

        {/* Profile */}
        <IconButton>
          <PersonOutlinedIcon sx={{ color: colors.grey[100] }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
