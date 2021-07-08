import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles/global.scss";

function App() {
  return (
    <>
      <Switch>
        <Route exact path={"/"} component={() => <span>Home</span>} />
        <Route exact path={"*"} component={() => <span>Not Found</span>} />
      </Switch>
    </>
  );
}

export default App;
