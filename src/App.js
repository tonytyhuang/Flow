import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import HomePage from "./apps/HomePage/app";
import BibleStudy from "./apps/BibleStudy/app";

function App() {
  return (
    <Router>
      <div className="container">
        <br />
        <Route path="/" exact component={HomePage} />
        <Route path="/biblestudy" component={BibleStudy} />
      </div>
    </Router>
  );
}

export default App;
