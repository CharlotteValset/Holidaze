import "./App.css";
import { Header } from "../src/components/Layout/Header";
import { About } from "./pages/About/index";
import { Footer } from "./components/Layout/Footer";

function App() {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto">
        <Header />
        <About />
        <Footer />
      </div>
    </>
  );
}

export default App;
