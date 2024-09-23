import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../../../../assets/images/holidaze-logo.png";
import { load } from "../../../../js/storage/load";

export const HeaderNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("profile");
    setIsMenuOpen(false);
    navigate("/");
  };

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const token = load("accessToken");

  return (
    <nav className="start-50 fixed top-0 z-20 w-full max-w-screen-2xl bg-dark-blue">
      <div className="mx-auto flex flex-wrap items-center justify-between p-4">
        <Link to="/" onClick={closeMenu}>
          <img src={Logo} className="w-36 md:w-56" alt="Holidaze logo" />
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center p-2 text-sm text-soft-pink md:hidden"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
          onClick={handleMenuToggle}
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
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="mt-0 flex flex-col bg-dark-blue p-1 text-center text-xl font-light md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0 md:font-extralight rtl:space-x-reverse">
            <li>
              <Link
                to="/"
                aria-label="Home"
                className={`block px-3 py-2 text-light-blue hover:text-soft-pink md:p-0 ${
                  location.pathname === "/" ? "text-soft-pink" : ""
                }`}
                aria-current="page"
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            {!token ? (
              <li>
                <Link
                  to="/signUp"
                  aria-label="Sign up"
                  className={`block px-3 py-2 text-light-blue hover:text-soft-pink md:p-0 ${
                    location.pathname === "/signUp" ? "text-soft-pink" : ""
                  }`}
                  onClick={closeMenu}
                >
                  Sign up
                </Link>
              </li>
            ) : (
              ""
            )}
            {!token ? (
              <li>
                <Link
                  to="/logIn"
                  aria-label="Log in"
                  className={`block px-3 py-2 text-light-blue hover:text-soft-pink md:p-0 ${
                    location.pathname === "/logIn" ? "text-soft-pink" : ""
                  }`}
                  onClick={closeMenu}
                >
                  Log in
                </Link>
              </li>
            ) : (
              ""
            )}
            {token ? (
              <li>
                <Link
                  to="/profile"
                  aria-label="Profile"
                  className={`block px-3 py-2 text-light-blue hover:text-soft-pink md:p-0 ${
                    location.pathname === "/profile" ? "text-soft-pink" : ""
                  }`}
                  onClick={closeMenu}
                >
                  My profile
                </Link>
              </li>
            ) : (
              ""
            )}
            <li>
              <Link
                to="/about"
                aria-label="About"
                className={`block px-3 py-2 text-light-blue hover:text-soft-pink md:p-0 ${
                  location.pathname === "/about" ? "text-soft-pink" : ""
                }`}
                onClick={closeMenu}
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                aria-label="Contact"
                className={`block px-3 py-2 text-light-blue hover:text-soft-pink md:p-0 ${
                  location.pathname === "/contact" ? "text-soft-pink" : ""
                }`}
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
            {token ? (
              <li>
                <button
                  onClick={logout}
                  aria-label="Log out"
                  className="mx-auto block px-3 py-2 text-light-blue hover:text-soft-pink md:p-0"
                >
                  Log out
                </button>
              </li>
            ) : (
              ""
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
