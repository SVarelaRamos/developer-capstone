import { Route, Routes } from "react-router-dom";
import "./App.css";
import BookingPage from "./BookingPage";
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
      </Routes>
      <Footer />
    </>
  );
}

export default App;
