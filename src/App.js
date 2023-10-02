import {
  Redirect,
  Switch,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import Authform from "./components/Auth/Authform";
import Home from "./components/pages/Home";
import ProfilePage from "./components/pages/ProfilePage";
import ForgotPass from "./components/pages/ForgotPass";
import DailyExpenses from "./components/pages/Expense/DailyExpenses";
import Root from "./components/Root";
import { useSelector } from "react-redux";
// import { AuthContext } from "./context/context";

function App() {
  // const authCtx = AuthContext();

  const isUserLoggedIn = useSelector((state) => state.auth.isUserLoggedIn);

  return (
    <Root>
      <Switch>
        {/* <Route path="/">{!authCtx.isUserLoggedIn && <Authform />}</Route> */}
        <Route path="/" exact>
          {isUserLoggedIn && <Home />}
          {!isUserLoggedIn && <Redirect to="/auth" />}
        </Route>
        <Route path="/home">
          {isUserLoggedIn && <Home />}
          {!isUserLoggedIn && <Redirect to="/auth" />}
        </Route>
        <Route path="/auth">
          {!isUserLoggedIn && <Authform />}
          {isUserLoggedIn && <Redirect to="/home" />}
        </Route>
        <Route path="/forgotPass">
          <ForgotPass />
        </Route>
        <Route path="/profile">
          <ProfilePage />
        </Route>
        <Route path="/expense">
          <DailyExpenses />
        </Route>
      </Switch>
    </Root>
  );
}

export default App;
