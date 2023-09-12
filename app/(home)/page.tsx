import "./styles/home.css";

import { MovieData } from "@/lib/types/movieData.types";
import HeaderActions from "@/components/UI/Home/header-actions";
import Navbar from "@/components/UI/Navbar";
import Footer from "@/components/UI/Footer";
import MovieDetailsShowcase from "@/components/UI/Home/movie-details";

const getInitialMovies = async () => {
  const url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.READ_ACCESS_TOKEN}`,
    },
  };

  const res = await fetch(url, { ...options, next: { revalidate: 300 } });
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
      poster_path: `https://image.tmdb.org/t/p/w500${movieData.poster_path}`,
      vote_average: movieData.vote_average,
      genre_ids: movieData.genre_ids,
      release_date: new Date(movieData.release_date).getFullYear(),
    };
  });

  return (
    <>
      <HeaderActions movieData={formattedMoviesData}>
        <Navbar />
      </HeaderActions>

      <div className="md:max-w-[1024px] mx-auto w-11/12">
        <section className="mt-20">
          <h2 className="text-3xl font-bold text-center">
            Trending <span className="text-rose-500">Movies</span>
          </h2>

          <div className="grid md:grid-cols-3 grid-cols-2 md:gap-20 sm:gap-16 gap-8 py-20" id="movieCon">
            {formattedMoviesData.slice(0, 10).map((movie) => (
              <MovieDetailsShowcase key={movie.id} movie={movie} />
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Home;
