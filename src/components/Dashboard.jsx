import { Box } from "@mui/material";
import FloatingChatBox from "./Chat";
import Header from "./Header";
import Revenue from "./Revenue";
import BarChart from "./BarChart";

const Dashboard = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f7f8fc",
        padding: 4,
      }}
    >
      <Header />
      <Revenue />
      <BarChart />
      <FloatingChatBox />
    </Box>
  );
};

export default Dashboard;
