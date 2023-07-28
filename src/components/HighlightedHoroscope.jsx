import React from "react";
import {Card, CardMedia, CardContent, Typography} from "@mui/material";

const HighlightedHoroscope = ({data}) => {
  const {id, name, init_date, end_date, prediction, image} = data;

  return (
    <Card key={data.id} sx={{display: "flex", m: 2}}>
      <CardMedia
        component="img"
        sx={{width: "20%", p: 1, display: "flex", m: 1, minHeight: 100, boxShadow: 3}}
        image={`../../../images/${image}`}
        alt={image}
      />
      <CardContent sx={{flex: "1 1 auto"}}>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="subtitle1" color="text.secondary" component="div">
          {`${init_date} - ${end_date}`}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="div">
          {prediction}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default HighlightedHoroscope;
