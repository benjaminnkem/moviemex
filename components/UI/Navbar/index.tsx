"use client";

import MaxWidth from "@/components/Layout/max-width";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faEarth, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";

interface NavbarProps {
  isTransparent?: string;
}

interface NavbarItemsProps {
  tag: string;
  path: string;
}

const Navbar: React.FC = ({ isTransparent }: NavbarProps) => {
  const pathname = usePathname();

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

  return (
    <>
      <div className={`${isTransparent && "bg-transparent"} z-50`}>
        <MaxWidth>
          <nav className="flex justify-between items-center py-6">
            <div className="flex space-x-4 items-center">
              <Image src={`/images/others/movie_box_logo.png`} width={50} height={50} alt="Logo" />
              <span className="font-bold text-xl">MovieMex</span>
            </div>

            <ul className="flex space-x-4 items-center">
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
            </ul>

            <div className="flex space-x-4 items-center">
              <FontAwesomeIcon icon={faSearch} className="cursor-pointer text-sm" />

              <div className="flex items-center space-x-1 text-sm cursor-pointer" title="Change Language">
                <FontAwesomeIcon icon={faEarth} className="text-red-500" />
                <span>EN</span>
                <FontAwesomeIcon icon={faChevronDown} />
              </div>

              <button className="bg-transparent px-4 py-1 rounded-full border-[3px] text-sm border-rose-500">
                SIGN IN
              </button>
            </div>
          </nav>
        </MaxWidth>
      </div>
    </>
  );
};

export default Navbar;
