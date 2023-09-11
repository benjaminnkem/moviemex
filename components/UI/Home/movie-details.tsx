import { checkForLastGenre, getGenreName } from "@/lib/resuseables/genreFinder";
import Image from "next/image";
import IMDBLogo from "../../../public/images/others/imdb_logo.png";
import { MovieData } from "@/lib/types/movieData.types";
import Link from "next/link";

interface MovieDetailsShowcaseProps {
  movie: MovieData;
}

const MovieDetailsShowcase = ({ movie }: MovieDetailsShowcaseProps) => {
  return (
    <Link href={`/movies/${movie.id}`}>
      <div
        className="w-full overflow-hidden rounded-md group  cursor-pointer bg-white dark:bg-transparent"
        data-testid="movie-card"
      >
        <div className="h-[20rem] relative duration-200 overflow-hidden">
          <Image
            src={movie.poster_path}
            alt={`${movie.title} Movie Cover`}
            width={400}
            height={400}
            className="absolute top-0 left-0 w-full h-full object-cover group-hover:scale-105 duration-200"
            data-testid="movie-poster"
          />

          {/* <div className="absolute bg-black bg-opacity-0 duration-200 hover:bg-opacity-20 w-full h-full top-0 left-0 z-10"></div> */}
        </div>

        <div className="py-3 space-y-1">
          <p className="text-gray-400 dark:text-gray-300 font-semibold" data-testid="movie-release-date">
            {movie.release_date}
          </p>

          <div className="space-y-1">
            <h3 className="font-semibold text-lg" data-testid="movie-title">
              {movie.title}
            </h3>
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
    </Link>
  );
};

export default MovieDetailsShowcase;
