import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PeopleList from "./Article";
import AddArticle from "./AddArticle";
import Store from "./Store";
const Home = () => {
  return (
    <>
      <Router>
        <Switch>
          <Store>
            <Route exact path="/" component={PeopleList} />
            <Route path="/add" component={AddArticle} />
          </Store>
        </Switch>
      </Router>
    </>
  );
};

export default Home;
