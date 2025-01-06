import { Route, Router } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Favourites from "./pages/Favourites";

function App() {
  return (
    <>
      <Header />
      <main>
        <Router>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
        </Router>
      </main>
      <Footer />
    </>
  );
}

export default App;
