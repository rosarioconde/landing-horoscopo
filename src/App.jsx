import React, {useMemo, useState, useEffect} from "react";
import data from "./data/results.json";
import FormatLineSpacingIcon from "@mui/icons-material/FormatLineSpacing";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import {
  Container,
  Grid,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Autocomplete,
  Button,
  InputAdornment,
  Typography,
} from "@mui/material";
import HoroscopeView from "./components/HoroscopeView";
import {filterHoroscopeData, sortHoroscopeData} from "./utils/utils";
import HighlightCard from "./components/HighlightedHoroscope";
import "./App.css";

function App() {
  const [horoscopeData, setHoroscopeData] = useState(data);
  const [sortType, setSortType] = useState("asc");
  const [sortByFields, setSortByFields] = useState(["name"]);
  const [filteredData, setFilteredData] = useState(horoscopeData);
  const [viewFormat, setViewFormat] = useState("list"); // Default format is list

  useEffect(() => {
    // Initial sorting
    setFilteredData(sortHoroscopeData(horoscopeData, sortType, sortByFields));
  }, [horoscopeData, sortType, sortByFields]);

  const handleSearch = (e) => {
    const query = e.target.value;
    const filteredData = filterHoroscopeData(horoscopeData, query);
    setFilteredData(sortHoroscopeData(filteredData, sortType, sortByFields));
  };

  const handleSortTypeChange = () => {
    setSortType((prevSortType) => (prevSortType === "asc" ? "desc" : "asc"));
  };

  const handleSortByFieldChange = (_, values) => {
    setSortByFields((prevFields) => {
      if (values) {
        return values.map((option) => option.value);
      } else {
        return [];
      }
    });
  };

  const handleFormatChange = (e) => {
    setViewFormat(e.target.value);
  };

  const filterOptions = [
    {value: "name", label: "Nombre"},
    {value: "init_date", label: "Fecha"},
  ];

  // Function to find the highlighted horoscope for the current day
  const findHighlightedHoroscope = () => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, "0");
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const todayFormatted = `${day}-${month}`;

    return horoscopeData.find((horoscope) => horoscope.init_date === todayFormatted);
  };

  const highlightedHoroscope = useMemo(() => findHighlightedHoroscope(), []);

  return (
    <>
      <Container>
        <Typography variant="h2" sx={{m: 2, textAlign: "center"}} component="h1">
          Horóscopo
        </Typography>
        <Grid item container justifyContent="space-between" alignItems="center" sx={{mb: 2}}>
          <Grid item sm={3}>
            <FormControl fullWidth variant="standard">
              <InputLabel>Ver como</InputLabel>
              <Select value={viewFormat} onChange={handleFormatChange}>
                <MenuItem value="list">Lista</MenuItem>
                <MenuItem value="grid">Grilla</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item sm={4}>
            <TextField
              fullWidth
              label="Buscar por signo"
              variant="outlined"
              onChange={handleSearch}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchOutlinedIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4} sx={{display: "flex"}}>
            <Autocomplete
              fullWidth
              multiple
              id="tags-standard"
              value={filterOptions.filter((option) => sortByFields.includes(option.value))}
              options={filterOptions || []}
              onChange={handleSortByFieldChange}
              getOptionLabel={(option) => option.label}
              renderInput={(params) => <TextField {...params} variant="standard" label="Filtrar" />}
            />

            <Button size="small" variant="contained" onClick={handleSortTypeChange}>
              <FormatLineSpacingIcon />
            </Button>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            {highlightedHoroscope && <HighlightCard data={highlightedHoroscope} />}
            {filteredData?.length === 0 ? (
              <Typography
                variant="overline"
                display="block"
                sx={{mt: 5, textAlign: "center"}}
                gutterBottom
              >
                No se encontraron resultados.
              </Typography>
            ) : (
              <HoroscopeView data={filteredData} format={viewFormat} />
            )}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;
