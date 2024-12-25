import { useState } from "react";
import logo from "../../assets/logo.svg";
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="bg-[#246A52]">
      <nav className="container flex items-center justify-between px-4 py-5 mx-auto md:px-0">
        {/* Logo */}
        <a href="#">
          <img src={logo} alt="site logo" className="h-8" />
        </a>
        {/* Desktop Menu */}
        <ul className="items-center hidden gap-6 text-lg font-medium md:flex">
          <MenuItem />
        </ul>
        {/* Contact Button */}
        <button className="hidden md:block border rounded px-4 py-2 font-medium text-white hover:bg-white hover:text-[#246A52] duration-300">
          Contact
        </button>
        {/* Hamburger Icon */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className="text-white md:hidden"
        >
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1.5em"
            width="1.5em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22 18.0048C22 18.5544 21.5544 19 21.0048 19H12.9952C12.4456 19 12 18.5544 12 18.0048C12 17.4552 12.4456 17.0096 12.9952 17.0096H21.0048C21.5544 17.0096 22 17.4552 22 18.0048Z"
              fill="currentColor"
            ></path>
            <path
              d="M22 12.0002C22 12.5499 21.5544 12.9954 21.0048 12.9954H2.99519C2.44556 12.9954 2 12.5499 2 12.0002C2 11.4506 2.44556 11.0051 2.99519 11.0051H21.0048C21.5544 11.0051 22 11.4506 22 12.0002Z"
              fill="currentColor"
            ></path>
            <path
              d="M21.0048 6.99039C21.5544 6.99039 22 6.54482 22 5.99519C22 5.44556 21.5544 5 21.0048 5H8.99519C8.44556 5 8 5.44556 8 5.99519C8 6.54482 8.44556 6.99039 8.99519 6.99039H21.0048Z"
              fill="currentColor"
            ></path>
          </svg>
        </button>
        <ul
          className={`fixed top-16 h-full w-2/3 bg-[#246A52] md:hidden  flex flex-col items-center gap-4 py-4 text-lg font-medium  
          transition-all duration-500 ease-in-out shadow-2xl z-10 pt-10 ${
            isMenuOpen
              ? "left-0 opacity-100 !top-0"
              : "-left-80 opacity-0 !top-0"
          }`}
        >
          <button
            className="absolute top-2 right-2"
            onClick={() => setIsMenuOpen(false)}
          >
            <svg
              className="text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>

          <MenuItem />
          <li>
            <ContactButton />
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
export function MenuItem() {
  return (
    <>
      <li className="text-white duration-200 hover:text-gray-300">
        <a href="#">Component</a>
      </li>
      <li className="text-white duration-200 hover:text-gray-300">
        <a href="#">Template</a>
      </li>
    </>
  );
}
export function ContactButton() {
  return (
    <button className="border rounded px-4 py-2 font-medium text-white hover:bg-white hover:text-[#246A52] duration-300">
      Contact
    </button>
  );
}
