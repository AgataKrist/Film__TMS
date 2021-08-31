export const filterBy = (data, value, key1, key2) => {
  return data.filter((element) => {
    if (key1 && key2) {
      return (
        element[key1].toLowerCase().includes(value.toLowerCase()) ||
        element[key2].toLowerCase().includes(value.toLowerCase())
      );
    }
    return element[key1].toLowerCase().includes(value.toLowerCase());
  });
};

export const sortBy = (data, value, key1) => {
  if (value) {
    return [...data]
      .sort((a, b) => a[key1] - b[key1])
      .slice(0, value.length + 1);
  }
  return [...data].sort((a, b) => a[key1] - b[key1]);
};

export const getFilterProps = (data, key1) => {
  if (Array.isArray(data[key1])) {
    return Array.from(
      new Set(data.map((film) => film[key1].split(", ")).flat())
    );
  }
  return Array.from(new Set(data.map((film) => film[key1]).flat()));
};
