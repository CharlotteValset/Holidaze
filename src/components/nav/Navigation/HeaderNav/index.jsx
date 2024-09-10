import { Link } from "react-router-dom";
import Logo from "../../../../assets/images/holidaze-logo.png";

export const HeaderNav = () => {
  return (
    <nav className="start-50 fixed top-0 z-20 w-full max-w-screen-2xl bg-dark-blue">
      <div className="mx-auto flex flex-wrap items-center justify-between p-4">
        <Link to="/">
          <img src={Logo} className="w-36 md:w-56" alt="Holidaze logo" />
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center p-2 text-sm text-soft-pink md:hidden"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-8 w-8"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="mt-0 flex flex-col bg-dark-blue p-1 text-center text-xl font-extralight md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0 rtl:space-x-reverse">
            <li>
              <Link
                to="/"
                aria-label="Home"
                className="block px-3 py-2 text-light-blue hover:text-soft-pink md:p-0"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/signUp"
                aria-label="Sign up"
                className="block px-3 py-2 text-light-blue hover:text-soft-pink md:p-0"
              >
                Sign up
              </Link>
            </li>
            <li>
              <Link
                to="/logIn"
                aria-label="Log in"
                className="block px-3 py-2 text-light-blue hover:text-soft-pink md:p-0"
              >
                Log in
              </Link>
            </li>
            <li>
              <Link
                to="/profile"
                aria-label="Profile"
                className="block px-3 py-2 text-light-blue hover:text-soft-pink md:p-0"
              >
                My profile
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                aria-label="About"
                className="block px-3 py-2 text-light-blue hover:text-soft-pink md:p-0"
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                aria-label="Contact"
                className="block px-3 py-2 text-light-blue hover:text-soft-pink md:p-0"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/"
                aria-label="Log out"
                className="block px-3 py-2 text-light-blue hover:text-soft-pink md:p-0"
              >
                Log out
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
