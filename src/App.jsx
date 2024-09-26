import { Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./App.css";
import "./index.css";
import { Layout } from "./components/nav/Layout";
import {
  Home,
  SingleVenue,
  SignUp,
  LogIn,
  Profile,
  AddEditVenue,
  ConfirmedBooking,
  About,
  Contact,
} from "./pages";

function App() {
  return (
    <HelmetProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="singleVenue/:id" element={<SingleVenue id />} />
          <Route path="signUp" element={<SignUp />} />
          <Route path="logIn" element={<LogIn />} />
          <Route path="profile" element={<Profile />} />
          <Route path="addEditVenue" element={<AddEditVenue />} />
          <Route path="confirmedBooking" element={<ConfirmedBooking />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </HelmetProvider>
  );
}

export default App;
