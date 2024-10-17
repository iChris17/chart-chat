import { Card, CardContent, Typography } from "@mui/material";
import { Chart } from "./Chart";

const BarChart = () => {
  return (
    <Card
      sx={{
        marginTop: 3,
        padding: 2,
        borderRadius: "12px",
      }}
    >
      <CardContent sx={{ width: "100%" }}>
        <Typography variant="h6" fontWeight="bold" color="textPrimary">
          Revenues
        </Typography>
        <Chart />
      </CardContent>
    </Card>
  );
};

export default BarChart;
