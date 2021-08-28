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
export const sortBy = (data, value, key) => {
  return [...data].sort((a, b) => a[key] - b[key]).slice(0, value.length + 1);
};
