"use client";

import MaxWidth from "@/components/Layout/max-width";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faEarth, faChevronDown, faClose } from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";
import { useState } from "react";
import SearchComponent from "../Search";

interface NavbarProps {
  isTransparent?: string;
}

interface NavbarItemsProps {
  tag: string;
  path: string;
}

const Navbar: React.FC = ({ isTransparent }: NavbarProps) => {
  const pathname = usePathname();
  const [isSearchOpen, setIsSideOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const navLinks: NavbarItemsProps[] = [
    {
      tag: "Home",
      path: "/",
    },
    {
      tag: "Movie",
      path: "#",
    },
    {
      tag: "TV Show",
      path: "#",
    },
    {
      tag: "Web Series",
      path: "#",
    },
    {
      tag: "Pricing",
      path: "#",
    },
  ];

  const toggleMobileNav = () => setIsMobileNavOpen(!isMobileNavOpen);
  const toggleSearchBar = () => setIsSideOpen(!isSearchOpen);

  return (
    <>
      <SearchComponent isOpen={isSearchOpen} togggleOpen={toggleSearchBar} />

      <div className={`${isTransparent && "bg-transparent"} z-50`}>
        <MaxWidth>
          <nav className="flex justify-between items-center py-6">
            <div className="flex space-x-4 items-center">
              <Image src={`/images/others/movie_box_logo.png`} width={50} height={50} alt="Logo" />
              <span className="font-bold text-xl">MovieMex</span>
            </div>

            {/* <ul className="hidden space-x-4 items-center md:flex">
              {navLinks.map((item, idx) => (
                <li
                  key={idx}
                  className={`py-4 border-b-4 cursor-pointer duration-200 ${
                    pathname === item.path ? "border-rose-500" : "border-transparent"
                  }`}
                >
                  {item.tag}
                </li>
              ))}
            </ul> */}

            <div className="xl:min-w-[40rem] lg:min-w-[35rem] md:min-w-[20rem] md:flex border rounded-lg px-4 focus-within:border-white text-white border-gray-400 duration-200 bg-transparent hidden items-center justify-between">
              <input
                type="text"
                className="py-2 text-white bg-transparent outline-none flex-grow placeholder:text-white"
                placeholder="What do you want to watch?"
                autoComplete="off"
                onFocus={toggleSearchBar}
              />
              <FontAwesomeIcon icon={faSearch} className="text-sm" />
            </div>

            <div className="flex space-x-4 items-center">
              <div className="md:hidden block">
                <FontAwesomeIcon icon={faSearch} className="cursor-pointer text-sm" onClick={toggleSearchBar} />
              </div>

              <div className="flex items-center space-x-1 text-sm cursor-pointer" title="Change Language">
                <FontAwesomeIcon icon={faEarth} className="text-red-500" />
                <span>EN</span>
                <FontAwesomeIcon icon={faChevronDown} />
              </div>

              <button className="bg-transparent px-4 py-1 rounded-full border-[3px] text-sm border-rose-500 hover:text-black hover:bg-rose-500 duration-200">
                Sign In
              </button>

              <div
                className="md:hidden w-8 h-8 rounded-full bg-rose-600 grid place-content-center cursor-pointer"
                title="Menu"
                onClick={toggleMobileNav}
              >
                <i className="ri-menu-4-fill text-lg"></i>
              </div>
            </div>
          </nav>
        </MaxWidth>

        <aside
          className={`fixed top-0 right-0 backdrop-blur-md overflow-hidden duration-200 h-full z-[500] ${
            isMobileNavOpen ? "w-full" : "w-0"
          }`}
        >
          <div className="w-full h-full grid place-content-center">
            <div className="text-center">
              {navLinks.map((item, idx) => (
                <p
                  key={idx}
                  className={`py-4 border-b-4 cursor-pointer duration-200 ${
                    pathname === item.path ? "border-rose-500" : "border-transparent"
                  }`}
                >
                  {item.tag}
                </p>
              ))}

              <button
                className="px-4 py-2 rounded-full border-2 hover:bg-rose-600 bg-opacity-40 duration-200 border-rose-600"
                onClick={toggleMobileNav}
              >
                <span>Close Menu</span>
              </button>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
};

export default Navbar;
