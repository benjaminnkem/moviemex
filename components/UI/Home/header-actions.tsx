"use client";

import { MovieData } from "@/lib/types/movieData.types";
import { faPlayCircle, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useState } from "react";

interface HeaderActions {
  children: React.ReactNode;
  movieData: MovieData[];
}

const HeaderActions = ({ children, movieData }: HeaderActions) => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [slideLength, setSlideLength] = useState<number>(5);
  const firstMovie = movieData[currentImageIndex];

  const changeImageData = (imgIndex: number) => setCurrentImageIndex(imgIndex);
  const incrementSlideLength = () => setSlideLength((prev) => prev + 1);

  return (
    <>
      <header className="lg:min-h-[40rem] md:min-h-[38rem] min-h-screen relative text-white">
        <Image
          src={firstMovie?.backdrop_path ? firstMovie.backdrop_path : movieData[0].backdrop_path}
          alt={`${firstMovie.title} Movie Cover`}
          width={1024}
          height={600}
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        />

        <div id="headerOverlay" className="absolute bg-black bg-opacity-60 w-full h-full top-0 left-0 z-10">
          {children}

          <div className="md:min-h-[35rem] min-h-screen -mt-[3rem] flex items-center justify-center">
            <div className="md:max-w-contain mx-auto w-11/12">
              <div className="flex justify-between items-center w-full">
                <div className="max-w-2xl">
                  <h1 className="text-[4rem] font-extrabold">{firstMovie.title}</h1>

                  <div className="mt-3 space-y-3">
                    <p className="text-lg">{firstMovie.overview}</p>
                    <button className="bg-rose-600 duration-200 hover:bg-rose-700 rounded-lg px-6 py-2 flex items-center space-x-2 text-white">
                      <FontAwesomeIcon icon={faPlayCircle} /> <span>Watch Trailer</span>{" "}
                    </button>
                  </div>
                </div>

                <ul className="flex flex-col space-y-2">
                  {Array(slideLength)
                    .fill("")
                    .map((_, idx) => (
                      <li
                        key={idx}
                        onClick={() => changeImageData(idx)}
                        className={`cursor-pointer duration-200 flex space-x-2 items-center ${
                          currentImageIndex === idx ? "-translate-x-2 font-bold" : "opacity-70"
                        }`}
                      >
                        {/* <span
                          className={`w-4 h-1 bg-white rounded-lg ${
                            currentImageIndex === idx ? "opacity-100" : "opacity-0"
                          }`}
                        ></span> */}
                        <span>{idx + 1}</span>
                      </li>
                    ))}
                  {slideLength < 8 && (
                    <FontAwesomeIcon icon={faPlus} onClick={() => incrementSlideLength()} className="cursor-pointer text-base block" />
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderActions;
