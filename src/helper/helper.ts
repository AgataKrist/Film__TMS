export const filterBy = (
  data: any[],
  value: string,
  key1: string,
  key2: string = ""
) => {
  return data.filter((element: any) => {
    if (key1 && key2) {
      return (
        element[key1].toLowerCase().includes(value.toLowerCase()) ||
        element[key2].toLowerCase().includes(value.toLowerCase())
      );
    }
    return element[key1].toLowerCase().includes(value.toLowerCase());
  });
};

export const sortBy = (data: any[], value: any[], key1: any) => {
  if (value) {
    return [...data]
      .sort((a, b) => a[key1] - b[key1])
      .slice(0, value.length + 1);
  }
  return [...data].sort((a, b) => a[key1] - b[key1]);
};

export const getFilterProps = (data: any[], key1: string) => {
  if (key1 === "country") {
    return Array.from(
      new Set(data.map((film) => film[key1].split(", ")).flat())
    );
  }
  return Array.from(new Set(data.map((film) => film[key1]).flat()));
};

export const filterByGenre = (films: any[], genreList: string[]) => {
  if (genreList.length) {
    const newFilteredFilm = films.reduce((acc, film) => {
      const { genre } = film;
      return genre.some((r: string) => genreList.includes(r))
        ? [...acc, film]
        : acc;
    }, []);
    return newFilteredFilm;
  }
};
