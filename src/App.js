import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import HomePage from "./HomePage";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
