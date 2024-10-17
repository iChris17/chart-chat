import { SouthEast } from "@mui/icons-material";
import { Card, CardContent, Chip, Grid2, Typography } from "@mui/material";
import { useContext } from "react";
import { ChartContext } from "../context/ChartContext";

const Revenue = () => {
  const { totalRevenue } = useContext(ChartContext);
  return (
    <>
      <Typography
        marginTop={4}
        variant="h6"
        fontWeight="bold"
        color="textPrimary"
      >
        Revenue
      </Typography>
      <Card
        sx={{
          padding: 2,
          borderRadius: "12px",
        }}
      >
        <CardContent>
          <Typography
            variant="body2"
            color="textSecondary"
            sx={{ marginTop: 1 }}
          >
            E-Commerce Revenue
          </Typography>
          <Grid2 flexDirection="column" container sx={{ marginTop: 3 }}>
            <Grid2 item>
              <Typography variant="h4" color="textPrimary">
                ${totalRevenue}K
              </Typography>
            </Grid2>
            <Grid2 item>
              <Chip
                icon={<SouthEast />}
                variant="outlined"
                label="-36.3%"
                color="error"
              />
            </Grid2>
          </Grid2>
        </CardContent>
      </Card>
    </>
  );
};

export default Revenue;
