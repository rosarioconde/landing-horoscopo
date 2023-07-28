import React from "react";
import {Grid, Card, CardContent, CardMedia, Typography} from "@mui/material";
import HoroscopeTypography from "./common/HoroscopeTypography";

const HoroscopeCardList = ({sign}) => {
  return (
    <Grid item xs={12}>
      <Card key={sign.id} sx={{display: "flex", m: 2}}>
        <CardMedia
          component="img"
          sx={{width: 180, minHeight: 100, p: 2}}
          image={`../../../images/${sign.image}`}
          alt={sign.image}
        />
        <CardContent sx={{flex: "1 1 auto"}}>
          <Typography variant="h6">{sign.name}</Typography>
          <HoroscopeTypography
            initDate={sign.init_date}
            endDate={sign.end_date}
            prediction={sign.prediction}
          />
        </CardContent>
      </Card>
    </Grid>
  );
};

export default HoroscopeCardList;
