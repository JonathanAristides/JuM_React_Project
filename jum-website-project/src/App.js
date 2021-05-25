import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import Homepage from "./components/Pages/Homepage/Homepage";
import Contact from "./components/Pages/Contactpage/Contact";
import Services from "./components/Pages/Servicespages/Services";

function App() {
  return (
    <div className="container">
      <Router>
        <Navbar />

        <main className="main">
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route path="/kontakt">
              <Contact />
            </Route>
            <Route path="/ueberuns"></Route>

            <Route path="/Services/:title">
              <Services />
            </Route>
          </Switch>
        </main>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
