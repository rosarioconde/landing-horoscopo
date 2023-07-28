import React from "react";
import {Grid} from "@mui/material";
import HoroscopeCardList from "./HoroscopeCardList";
import HoroscopeCardGrid from "./HoroscopeCardGrid";

const HoroscopeView = ({data, format}) => {
  return (
    <>
      {format === "list" ? (
        <Grid container spacing={1}>
          {data?.map((sign) => (
            <HoroscopeCardList key={sign?.id} sign={sign} />
          ))}
        </Grid>
      ) : (
        <Grid container spacing={1}>
          {data?.map((sign) => (
            <HoroscopeCardGrid key={sign?.id} sign={sign} />
          ))}
        </Grid>
      )}
    </>
  );
};

export default HoroscopeView;
