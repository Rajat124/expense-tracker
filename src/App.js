import {
  Redirect,
  Switch,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import Authform from "./components/Auth/Authform";
import { AuthContext } from "./context/context";
import Home from "./components/pages/Home";
import ProfilePage from "./components/pages/ProfilePage";

function App() {
  const authCtx = AuthContext();

  return (
    <Switch>
      {/* <Route path="/"></Route> */}
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/auth" exact>
        {!authCtx.isUserLoggedIn && <Authform />}
        {authCtx.isUserLoggedIn && <Redirect to="/home" />}
      </Route>
      <Route path="/profile">
        <ProfilePage />
      </Route>
    </Switch>
  );
}

export default App;
