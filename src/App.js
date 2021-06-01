import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import Homepage from "./components/Pages/Homepage/Homepage";
import Contact from "./components/Pages/Contactpage/Contact";
import ServicesPage from "./components/Pages/Servicespages/ServicesPage";
import AboutPage from "./components/Pages/Aboutpage/AboutPage";

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
            <Route exact path="/kontakt">
              <Contact />
            </Route>
            <Route path="/ueberuns">
              <AboutPage />
            </Route>

            <Route path="/Services/:title">
              <ServicesPage />
            </Route>
          </Switch>
        </main>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
