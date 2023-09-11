import MaxWidth from "@/components/Layout/max-width";
import "./styles/home.css";

import { MovieData } from "@/lib/types/movieData.types";
import HeaderActions from "@/components/UI/Home/header-actions";
import Navbar from "@/components/UI/Navbar";

const getInitialMovies = async () => {
  const url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.READ_ACCESS_TOKEN}`,
    },
  };

  const res = await fetch(url, { ...options, next: { revalidate: 60 } });
  if (!res.ok) return [];

  return res.json();
};

const Home: React.FC = async () => {
  const initialMoviesData = await getInitialMovies();
  const formattedMoviesData: MovieData[] = initialMoviesData.results.map((movieData: MovieData) => {
    return {
      id: movieData.id,
      title: movieData.title,
      original_language: movieData.original_language,
      overview: movieData.overview,
      backdrop_path: `https://image.tmdb.org/t/p/original${movieData.backdrop_path}`,
      release_date: movieData.release_date,
      vote_average: movieData.vote_average,
    };
  });

  return (
    <>
      <HeaderActions movieData={formattedMoviesData}>
        <Navbar />
      </HeaderActions>

      <MaxWidth>
        <h1>Home</h1>
      </MaxWidth>
    </>
  );
};

export default Home;
