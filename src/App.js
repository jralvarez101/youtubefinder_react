import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserItem from "./components/users/UserItem";
import Search from "./components/users/Search";

function App() {
  return (
    <div>
      <Navbar />
      <Search />
      <UserItem />
    </div>
  );
}

export default App;
