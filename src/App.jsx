import "./App.css";
import { Header } from "../src/components/Layout/Header";
import { AddEditVenue } from "./pages/AddEditVenue/index";
import { Footer } from "./components/Layout/Footer";

function App() {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto">
        <Header />
        <AddEditVenue />
        <Footer />
      </div>
    </>
  );
}

export default App;
