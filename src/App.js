import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import HomePage from "./apps/HomePage/app";

function App() {
  return (
    <Router>
      <div className="container">
        {/* // <Navbar /> */}
        <br />
        <Route path="/" exact component={HomePage} />
      </div>
    </Router>
  );
}

export default App;
