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
import ForgotPass from "./components/pages/ForgotPass";
import DailyExpenses from "./components/pages/Expense/DailyExpenses";

function App() {
  const authCtx = AuthContext();

  return (
    <Switch>
      {/* <Route path="/"></Route> */}
      <Route path="/home">
        {authCtx.isUserLoggedIn && <Home />}
        {!authCtx.isUserLoggedIn && <Redirect to="/auth" />}
      </Route>
      <Route path="/auth">
        {!authCtx.isUserLoggedIn && <Authform />}
        {authCtx.isUserLoggedIn && <Redirect to="/home" />}
      </Route>
      <Route path="/forgotPass">
        <ForgotPass />
      </Route>
      <Route path="/profile">
        <ProfilePage />
      </Route>
      <Route path="/dailyExpense">
        <DailyExpenses />
      </Route>
    </Switch>
  );
}

export default App;
