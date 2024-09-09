import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";
import { Layout } from "./components/Layout/index";
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
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="singleVenue" element={<SingleVenue />} />
        <Route path="signUp" element={<SignUp />} />
        <Route path="logIn" element={<LogIn />} />
        <Route path="profile" element={<Profile />} />
        <Route path="addEditVenue" element={<AddEditVenue />} />
        <Route path="confirmedBooking" element={<ConfirmedBooking />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
