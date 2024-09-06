import "./App.css";
import { Header } from "../src/components/Layout/Header";
import { Contact } from "./pages/Contact/index";
import { Footer } from "./components/Layout/Footer";

function App() {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto">
        <Header />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
