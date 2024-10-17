import { Button, Grid2, Typography } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";

const Header = () => {
  return (
    <Grid2 container justifyContent="space-between" alignItems="center">
      <Grid2 item>
        <Typography variant="body1" color="textSecondary">
          October 2024
        </Typography>
        <Typography variant="h4" fontWeight="bold" color="textPrimary">
          Dashboard
        </Typography>
      </Grid2>
      <Grid2 item>
        <Button
          style={{ backgroundColor: "#ffff" }}
          color="light"
          variant="contained"
          startIcon={<SettingsIcon />}
        >
          Settings
        </Button>
      </Grid2>
    </Grid2>
  );
};

export default Header;
