import "./App.css";
import { Header } from "../src/components/Layout/Header";
import { ConfirmedBooking } from "./pages/ConfirmedBooking/index";
import { Footer } from "./components/Layout/Footer";

function App() {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto">
        <Header />
        <ConfirmedBooking />
        <Footer />
      </div>
    </>
  );
}

export default App;
