import React from "react";
import {Typography} from "@mui/material";

const HoroscopeTypography = ({initDate, endDate, prediction, variant, color, ...restProps}) => {
  return (
    <>
      <Typography variant="subtitle1" color="text.secondary" {...restProps}>
        {`${initDate} - ${endDate}`}
      </Typography>
      <Typography variant="body2" color="textSecondary" {...restProps}>
        {prediction}
      </Typography>
    </>
  );
};

export default HoroscopeTypography;
