import Navbar from "./components/layout/Navbar";
import About from "../src/components/pages/About";
import Home from "./components/pages/Home";
import User from "./components/channel/ChannelDetails";
import { ROUTES } from "./config/constants";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about/" component={About} />
          <Route path={ROUTES.CHANNEL_DETAILS} component={User} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
