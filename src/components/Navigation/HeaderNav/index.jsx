import Logo from "../../../assets/images/holidaze-logo.png";

export const HeaderNav = () => {
  return (
    <nav className="bg-dark-blue fixed w-full max-w-screen-2xl z-20 top-0 start-50">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4">
        <img src={Logo} className="w-36 md:w-56" alt="Holidaze logo" />
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-soft-pink md:hidden"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-8 h-8"
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
          <ul className="font-extralight text-xl flex flex-col text-center p-1 md:p-0 mt-0 bg-dark-blue md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            <li>
              <a href="#" className="block py-2 px-3 text-light-blue hover:text-soft-pink md:p-0" aria-current="page">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-light-blue hover:text-soft-pink md:p-0">
                Sign up
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-light-blue hover:text-soft-pink md:p-0">
                Log in
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-light-blue hover:text-soft-pink md:p-0">
                My profile
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-light-blue hover:text-soft-pink md:p-0">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-light-blue hover:text-soft-pink md:p-0">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-light-blue hover:text-soft-pink md:p-0">
                Log out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
