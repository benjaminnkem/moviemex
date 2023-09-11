import "./styles/home.css";

import { MovieData } from "@/lib/types/movieData.types";
import HeaderActions from "@/components/UI/Home/header-actions";
import Navbar from "@/components/UI/Navbar";
import Footer from "@/components/UI/Footer";
import Image from "next/image";
import IMDBLogo from "../../public/images/others/imdb_logo.png";
import { checkForLastGenre, getGenreName } from "@/lib/resuseables/genreFinder";

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
``;
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
      release_date: movieData.release_date,
      vote_average: movieData.vote_average,
      genre_ids: movieData.genre_ids,
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
            {formattedMoviesData.map((movie) => (
              <div key={movie.id}>
                <div className="w-full overflow-hidden rounded-md bg-white dark:bg-transparent">
                  <div>
                    <div className="h-[20rem] relative duration-200 group overflow-hidden">
                      <Image
                        src={movie.poster_path}
                        alt={`${movie.title} Movie Cover`}
                        width={400}
                        height={400}
                        className="absolute top-0 left-0 w-full h-full object-cover group-hover:scale-105 duration-200"
                      />

                      <div className="absolute bg-black bg-opacity-0 duration-200 hover:bg-opacity-20 w-full h-full top-0 left-0 z-10"></div>
                    </div>

                    <div className="py-4 space-y-1">
                      <h3 className="font-semibold text-lg">{movie.title}</h3>
                      <div className="flex items-center space-x-2">
                        <Image src={IMDBLogo} alt="IMDBLogo" width={37} height={17} />
                        <p>{Number((Number(movie.vote_average.toFixed(2)) * 10).toFixed(2))} / 100</p>
                      </div>
                      <ul className="flex space-x-1 text-gray-400 dark:text-gray-300">
                        {getGenreName(movie.genre_ids).map((genre, idx) => (
                          <li key={idx}>{checkForLastGenre(idx, movie.genre_ids) ? genre : `${genre},`}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Home;
