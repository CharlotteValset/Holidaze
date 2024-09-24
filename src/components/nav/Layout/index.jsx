import { Header } from "./Header";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";

export const Layout = () => {
  return (
    <div className="mx-auto flex min-h-screen max-w-screen-2xl flex-col">
      <Header />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
