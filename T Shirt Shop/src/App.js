import "./App.css";
import {Container } from "react-bootstrap";
import TopBar from './Components/TopBar';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import About from './Components/About'
import Contact from './Components/Contact'
import Policy from './Components/Policy';
import NavBar from './Components/Navbar';
import Homescreen from "./Screens/Homescreen";

function App() {
  return (
    <>
    <BrowserRouter>
      <TopBar/>
      <NavBar/>
      <Switch>
        <Route path="/about" component={About} exact />
        <Route path="/contact" component={Contact} exact />
        <Route path="/policies" component={Policy} exact />
        <Route path="/" component={Homescreen} exact />
      </Switch>

      </BrowserRouter>

      
    </>
  );
}

export default App;
