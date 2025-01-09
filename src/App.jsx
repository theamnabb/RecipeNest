import { Route, Router, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Favourites from "./pages/Favourites";

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/app" element={<Favourites />} />
        </Routes>
      </main>
      <Footer />
    </div>
    </>
  );
}

export default App;
