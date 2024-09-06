import { Link } from "react-router-dom";
import Logo from "../../../assets/images/holidaze-logo.png";

export const FooterNav = () => {
  return (
    <section className="bg-dark-blue">
      <div>
        <Link to="/" aria-label="Home">
          {" "}
          <img src={Logo} className="w-24 mx-auto py-4" alt="Holidaze Logo" />
        </Link>
      </div>
      <div className="flex flex-row justify-center gap-5 mb-4">
        <a href="https://www.twitter.com/">
          {" "}
          <i className="text-4xl text-light-blue hover:text-soft-pink fa-brands fa-square-twitter"></i>
        </a>
        <a href="https://www.instagram.com/">
          {" "}
          <i className="text-4xl text-light-blue hover:text-soft-pink fa-brands fa-square-instagram"></i>
        </a>
        <a href="https://www.facebook.com/">
          {" "}
          <i className="text-4xl text-light-blue hover:text-soft-pink fa-brands fa-square-facebook"></i>
        </a>
      </div>
      <p className="text-light-blue text-sm text-center font-light pb-4">
        Designed & developed by <span className="text-soft-pink hover:underline cursor-pointer">Charlotte Valset</span>
      </p>
    </section>
  );
};
