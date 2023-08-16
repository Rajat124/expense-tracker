import {
  Redirect,
  Switch,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import Authform from "./components/Auth/Authform";
import { AuthContext } from "./context/context";
import Home from "./components/pages/Home";

function App() {
  const authCtx = AuthContext();

  return (
    <Switch>
      <Route path="/home" exact>
        <Home />
      </Route>
      <Route path="/auth" exact>
        {!authCtx.isUserLoggedIn && <Authform />}
        {authCtx.isUserLoggedIn && <Redirect to="/home" />}
      </Route>
    </Switch>
  );
}

export default App;
