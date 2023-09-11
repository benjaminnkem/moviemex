"use client";

import { MovieData } from "@/lib/types/movieData.types";
import Image from "next/image";
import jonWickImg from "../../../public/images/background/john_wick.jpeg";

interface HeaderActions {
  children: React.ReactNode;
  movieData: MovieData[];
}

const HeaderActions = ({ children, movieData }: HeaderActions) => {
  const firstMovie = movieData[0];

  return (
    <>
      <header className="min-h-[35rem] relative">
        <Image
          src={firstMovie.poster_path}
          alt={`${firstMovie.title} Movie Cover`}
          width={1024}
          height={600}
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        />

        <div id="headerOverlay" className="absolute bg-black bg-opacity-50 w-full h-full top-0 left-0 z-10">
          {children}
        </div>
      </header>
    </>
  );
};

export default HeaderActions;
