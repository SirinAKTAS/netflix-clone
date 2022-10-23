const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = "https://api.themoviedb.org/3/";

const fetchMovies = async (endpoint) => {
  return await fetch(
    `${API_URL}${endpoint}?language=fr-FR&api_key=${API_KEY}`
  ).then((response) => response.json());
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getHomeMovies: async () => {
    return [
      {
        slug: "top-rated",
        title: "Les mieux notés",
        items: await fetchMovies("movie/top_rated"),
      },
      {
        slug: "upcoming",
        title: "Prochainement",
        items: await fetchMovies("movie/upcoming"),
      },
      {
        slug: "animation",
        title: "Animation",
        items: await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=16`
        ).then((response) => response.json()),
      },
      {
        slug: "action",
        title: "Action",
        items: await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`
        ).then((response) => response.json()),
      },
      {
        slug: "thriller",
        title: "Thriller",
        items: await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=53`
        ).then((response) => response.json()),
      },
      {
        slug: "romance",
        title: "Romantique",
        items: await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`
        ).then((response) => response.json()),
      },
      {
        slug: "comedy",
        title: "Comédie",
        items: await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`
        ).then((response) => response.json()),
      },
      {
        slug: "documentary",
        title: "Documentaire",
        items: await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=99`
        ).then((response) => response.json()),
      },
    ];
  },
};
