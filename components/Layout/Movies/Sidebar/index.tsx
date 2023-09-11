import Image from "next/image";
import Link from "next/link";

const MovieDetailsSideBar = () => {
  const sideLinks = [
    { label: "Home", icon: <i className="ri-home-2-line"></i> },
    { label: "Movies", icon: <i className="ri-movie-2-line"></i> },
    { label: "TV Series", icon: <i className="ri-tv-2-line"></i> },
    { label: "Upcoming", icon: <i className="ri-calendar-2-line"></i> },
  ];

  return (
    <>
      <aside className="min-h-screen fixed overflow-hidden md:w-[280px] sm:w-[160px] w-[60px] rounded-tr-3xl rounded-br-rounded-tr-3xl border-2 space-y-14">
        <Link href={"/"} className="flex space-x-4 items-center p-4">
          <Image src={`/images/others/movie_box_logo.png`} width={50} height={50} alt="Logo" />
          <span className="font-bold md:text-xl sm:text-sm hidden sm:block">MovieMex</span>
        </Link>

        <div className="space-y-2">
          {sideLinks.map((link, idx) => (
            <div
              key={idx}
              className={`flex space-x-2 p-5 duration-200 cursor-pointer ${
                link.label === "Movies"
                  ? "border-r-[6px] border-rose-600 bg-rose-50 hover:bg-rose-100"
                  : "hover:bg-rose-50"
              }`}
            >
              {link.icon} <p className="sm:block hidden">{link.label}</p>
            </div>
          ))}
        </div>

        <div className="border hidden sm:block border-rose-600 rounded-3xl bg-rose-50 pt-10 px-4 pb-4 space-y-2 mx-2 p-4">
          <h4 className="font-semibold text-lg leading-relaxed">Play more quizzes to earn free tickets</h4>
          <p className="text-gray-700">50k People are playing now.</p>

          <div className="text-center">
            <button className="text-rose-600 bg-rose-300 rounded-full px-3 py-1 text-sm font-semibold">
              Start Playing
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default MovieDetailsSideBar;
