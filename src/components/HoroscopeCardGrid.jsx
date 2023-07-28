import React from "react";
import {Grid, Card, CardContent, CardMedia, Typography} from "@mui/material";
import HoroscopeTypography from "./common/HoroscopeTypography";

const HoroscopeCardGrid = ({sign}) => {
  return (
    <Grid item xs={12} md={6}>
      <Card sx={{display: "flex", m: 2}}>
        <CardContent>
          <Typography variant="h6">{sign.name} </Typography>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <CardMedia
                component="img"
                sx={{minHeight: 100, width: "100%"}}
                image={`../../../images/${sign.image}`}
                alt={sign.image}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <HoroscopeTypography
                initDate={sign.init_date}
                endDate={sign.end_date}
                prediction={sign.prediction}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default HoroscopeCardGrid;
