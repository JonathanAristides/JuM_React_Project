import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import "./App.scss";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="container">
      <Router>
        <Navbar />

        <main className="main"></main>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
