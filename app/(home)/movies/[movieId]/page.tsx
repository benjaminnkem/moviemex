import { MovieData } from "@/lib/types/movieData.types";
import { faFilm, faMagic, faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export const dynamicParams = true;

export async function generateMetadata({ params }: { params: any }) {
  const { movieId } = params;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.READ_ACCESS_TOKEN}`,
    },
  };

  const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, options);
  if (!res.ok) return {};

  const movieData: MovieData = await res.json();

  return {
    title: `${movieData.title} (${new Date(movieData.release_date).getFullYear()}) - MovieMex`,
    description: movieData.overview,
  };
}

const getMovieDetails = async (params: any) => {
  const { movieId } = params;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.READ_ACCESS_TOKEN}`,
    },
    next: { revalidate: 300 },
  };

  const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, options);
  return response.json();
};

const MainMovieDetails = async ({ params }: { params: any }) => {
  const movieDetails: any = await getMovieDetails(params);

  return (
    <>
      <header className="min-h-[30rem] relative w-full rounded-lg overflow-hidden">
        <Image
          src={`https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`}
          alt={`${movieDetails.title} Movie Cover`}
          width={1488}
          height={1488}
          className="absolute top-0 left-0 w-full h-full object-cover duration-200"
        />

        <div className="absolute top-0 left-0 w-full h-full duration-200 text-white bg-black bg-opacity-40 hover:bg-opacity-50 grid place-content-center">
          <div className="text-center">
            <i className="ri-play-circle-line text-8xl cursor-pointer" title="Play"></i>
            <p className="text-2xl font-bold">Watch Trailer</p>
          </div>
        </div>
      </header>

      <section className="my-4">
        <div className="lg:grid flex flex-col gap-4" style={{ gridTemplateColumns: "2fr 1fr" }}>
          <div>
            <div className="flex space-x-4 flex-wrap">
              <div className="flex items-center flex-wrap space-x-2 text-xl">
                <p className="" data-testid="movie-title">
                  {movieDetails.original_title}
                </p>
                <span className="rounded-full w-1 h-1 bg-gray-800"></span>

                <p className="" data-testid="movie-release-date">
                  {new Date(movieDetails.release_date).getFullYear()}
                </p>
                <span className="rounded-full w-1 h-1 bg-gray-800"></span>

                <p className="">PG-13</p>
                <span className="rounded-full w-1 h-1 bg-gray-800"></span>

                <p className="">{movieDetails.status}</p>
              </div>

              <div className="flex items-center space-x-2">
                <>
                  {movieDetails.genres.map((genre: { id: number; name: string }) => (
                    <p
                      key={genre.id}
                      className="px-2 py-1 rounded-full cursor-pointer duration-200 hover:border-rose-500 text-xs border border-gray-200 text-rose-500"
                    >
                      {genre.name}
                    </p>
                  ))}
                </>
              </div>
            </div>

            <div className="mt-4">
              <p data-testid="overview">{movieDetails.overview}</p>

              <div className="flex flex-col space-y-4 mt-6">
                <p>
                  Tagline: <span className="text-rose-500 font-semibold">{movieDetails.tagline}</span>
                </p>
                <p>
                  Status: <span className="text-rose-500 font-semibold">{movieDetails.status}</span>
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 space-y-4">
            <div className="space-y-2">
              <button className="w-full bg-rose-600 text-white rounded-lg px-4 py-2 flex items-center space-x-2">
                <FontAwesomeIcon icon={faMagic} /> <span>See Showtimes</span>
              </button>
              <button className="w-full rounded-lg px-4 py-2 flex items-center text-black space-x-2 bg-rose-200 border-rose-600 border">
                <FontAwesomeIcon icon={faFilm} /> <span>More Watch Options</span>
              </button>
            </div>

            <div className="min-h-[10rem] rounded-md grid grid-cols-3 overflow-hidden relative">
              <div className="bg-gray-300"></div>
              <div className="bg-gray-400"></div>
              <div className="bg-gray-500"></div>

              <div className="absolute bottom-0 w-full text-sm py-1 bg-black bg-opacity-40 text-center flex items-center justify-center text-white space-x-2">
                <div>
                  <FontAwesomeIcon icon={faFilm} />
                  <p>Best Movies in September</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainMovieDetails;
