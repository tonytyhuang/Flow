import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import BibleStudy from "./apps/BibleStudy/app";
import ExercisePage from "./apps/ExercisePage/app";
import HighlightPage from "./apps/HighlightPage/app";
import HomePage from "./apps/HomePage/app";

function App() {
  return (
    <Router>
      <div className="container">
        <br />
        <Route path="/exercise" component={ExercisePage} />
        <Route path="/biblestudy" component={BibleStudy} />
        <Route path="/highlight" component={HighlightPage} />
        <Route path="/" exact component={HomePage} />
      </div>
    </Router>
  );
}

export default App;
