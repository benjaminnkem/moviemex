import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "remixicon/fonts/remixicon.css";

const Footer: React.FC = () => {
  const footerLinks = [
    [
      {
        label: <i className="ri-github-fill"></i>,
        text: "Github",
        isIcon: true,
        link: "https://github.com/benjaminnkem/hngx-movie-app",
      },
      {
        label: <i className="ri-twitter-fill"></i>,
        text: "Twitter",
        isIcon: true,
        link: "https://twitter.com/MainNkem",
      },
      {
        label: <i className="ri-instagram-fill"></i>,
        text: "Instagram",
        isIcon: true,
        link: "https://www.instagram.com/iambenjaminnkem/",
      },
      {
        label: <i className="ri-facebook-circle-fill"></i>,
        text: "Facebook",
        isIcon: true,
        link: "",
      },
      {
        label: <i className="ri-youtube-fill"></i>,
        text: "Youtube",
        isIcon: true,
        link: "",
      },
    ],
    [
      {
        label: "Condition of Use",
        text: "Condition of Use",
        isIcon: false,
        link: "",
      },
      {
        label: "Privacy & Policy",
        text: "Privacy & Policy",
        isIcon: false,
        link: "",
      },
      {
        label: "Pressroom",
        text: "Pressroom",
        isIcon: false,
        link: "",
      },
    ],
    [{ label: "@2023 MovieMex by Benjamin Nkem", text: "Benjamin Nkem", isIcon: false, link: "" }],
  ];

  return (
    <footer className="">
      <div className="dark:bg-darkShade py-5 flex justify-center items-center text-gray-800 dark:text-gray-300">
        <div className="space-y-2">
          {footerLinks.map((linksContainer, idx) => (
            <ul key={idx} className="flex items-center space-x-5 text-center justify-center">
              <>
                {linksContainer.map((link, idx) => (
                  <li key={idx} title={link.text} className={link.isIcon ? "text-2xl" : "text-base"}>
                    {link.link ? (
                      <a href={link.link} target="_blank">
                        {link.label}
                      </a>
                    ) : (
                      link.label
                    )}
                  </li>
                ))}
              </>
            </ul>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
