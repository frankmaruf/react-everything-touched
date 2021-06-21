import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import NotFound from "./NotFound";
import People from "./People";
const RouterDom = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/people" component={People} />
          <Route path="" component={NotFound} />
          <Router />
        </Switch>
      </Router>
    </>
  );
};
export default RouterDom;
