import "./App.css";
import { Header } from "../src/components/Layout/Header";
import { SignUp } from "./pages/SignUp/index";
import { Footer } from "./components/Layout/Footer";

function App() {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto">
        <Header />
        <SignUp />
        <Footer />
      </div>
    </>
  );
}

export default App;
