import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Goals from "./containers/Goals/Goals";
import Error from "./containers/Error/Error";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/goals">
            <Goals />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
