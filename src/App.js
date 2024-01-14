import { Route, Routes } from "react-router-dom";
import "./App.css";
import BookingPage from "./BookingPage";
import ConfirmedBooking from "./ConfirmedBooking";
import Footer from "./Footer";
import Header from "./Header";
import HomePage from "./HomePage";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
