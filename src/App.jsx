import "./App.css";
import { Header } from "../src/components/Layout/Header";
import { Profile } from "./pages/Profile/index";
import { Footer } from "./components/Layout/Footer";

function App() {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto">
        <Header />
        <Profile />
        <Footer />
      </div>
    </>
  );
}

export default App;
