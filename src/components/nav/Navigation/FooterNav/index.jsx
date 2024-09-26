import { Link } from "react-router-dom";
import Logo from "../../../../assets/images/holidaze-logo.png";

export const FooterNav = () => {
  return (
    <footer className="bg-dark-blue">
      <div>
        <Link to="/" aria-label="Home">
          {" "}
          <img src={Logo} className="mx-auto w-24 py-4" alt="Holidaze Logo" />
        </Link>
      </div>
      <div className="mb-4 flex flex-row justify-center gap-5">
        <a href="https://www.twitter.com/" title="Twitter">
          <i
            class="fa-brands fa-square-twitter text-4xl text-light-blue hover:text-soft-pink"
            aria-hidden="true"
          ></i>
        </a>
        <a href="https://www.instagram.com/" title="Instagram">
          {" "}
          <i className="fa-brands fa-square-instagram text-4xl text-light-blue hover:text-soft-pink"></i>
        </a>
        <a href="https://www.facebook.com/" title="Facebook">
          {" "}
          <i className="fa-brands fa-square-facebook text-4xl text-light-blue hover:text-soft-pink"></i>
        </a>
      </div>
      <p className="pb-4 text-center text-sm font-light text-light-blue">
        Designed & developed by{" "}
        <a
          href="https://www.charlottevalset.no"
          className="cursor-pointer text-soft-pink hover:underline"
        >
          Charlotte Valset
        </a>
      </p>
    </footer>
  );
};
