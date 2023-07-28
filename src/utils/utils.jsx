export const filterHoroscopeData = (data, query) => {
  const normalizedQuery = query.toLowerCase().normalize("NFD");
  return data.filter((sign) => sign.name.toLowerCase().normalize("NFD").includes(normalizedQuery));
};

export const sortHoroscopeData = (data, sortType, sortByFields) => {
  const sortedData = [...data];
  sortedData.sort((a, b) => {
    for (const field of sortByFields) {
      if (sortType === "asc") {
        if (a[field] < b[field]) return -1;
        if (a[field] > b[field]) return 1;
      } else {
        if (b[field] < a[field]) return -1;
        if (b[field] > a[field]) return 1;
      }
    }
    return 0;
  });
  return sortedData;
};
