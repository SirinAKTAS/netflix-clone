import { useEffect, useState } from "react";
import ApiMovie from "./ApiMovie";
import "./App.css";
import FeaturedMovie from "./components/FeaturedMovie";
import MovieSection from "./components/MovieSection";

function App() {
  const [moviesList, setMoviesList] = useState([]);
  const [featureData, setFeatureData] = useState(null);

  useEffect(() => {
    const loadAllMovies = async () => {
      let list = await ApiMovie.getHomeMovies();
      setMoviesList(list);

      let originals = list.filter((oneMovie) => oneMovie.slug === "top-rated");

      let chooseRandomMovie = Math.floor(
        Math.random() * (originals[0].items.results.length - 1)
      );
      let chosen = originals[0].items.results[chooseRandomMovie];
      let chosenInfo = await ApiMovie.getMovieInfo(chosen.id, "movie");
      setFeatureData(chosenInfo);
    };
    loadAllMovies();
  }, []);

  return (
    <div className="container">
      {featureData && <FeaturedMovie film={featureData} />}
      <section className="list">
        {moviesList.map((item, key) => (
          <MovieSection key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  );
}

export default App;
