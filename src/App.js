import { useState } from "react";
import Navbar from "./components/layout/Navbar";
import About from "../src/components/pages/About";
import Home from "./components/pages/Home";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [searchResultList, setSearchResultList] = useState([]);

  const getSearchResults = async (searchText) => {
    const res = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&forUsername=${searchText}&key=${process.env.REACT_APP_YOUTUBE_API}`
    );
    setSearchResultList(res?.data?.items ?? []);
  };

  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route
            path="/"
            exact
            component={() => (
              <Home
                getSearchResults={getSearchResults}
                searchResultList={searchResultList}
                setSearchResultList={setSearchResultList}
              />
            )}
          />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
