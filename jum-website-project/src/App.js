import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import "./App.scss";

function App() {
  return (
    <div className="container">
      <Router>
        <Navbar />

        <main></main>

        <footer></footer>
      </Router>
    </div>
  );
}

export default App;
