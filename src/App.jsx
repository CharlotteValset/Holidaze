import "./App.css";
import { Header } from "../src/components/Layout/Header";
import { LogIn } from "./pages/LogIn/index";
import { Footer } from "./components/Layout/Footer";

function App() {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto">
        <Header />
        <LogIn />
        <Footer />
      </div>
    </>
  );
}

export default App;
