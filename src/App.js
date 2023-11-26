import {
  Redirect,
  Switch,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import Home from "./pages/Home";
import ProfilePage from "./pages/ProfilePage";
import ForgotPass from "./components/ForgotPass";
import DailyExpenses from "./components/Expense/DailyExpenses";
import Root from "./components/Root";
import { useSelector } from "react-redux";
import AuthForm from "./auth/AuthForm";

function App() {
  const isUserLoggedIn = useSelector((state) => state.auth.isUserLoggedIn);
  return (
    <Root>
      <Switch>
        <Route path="/" exact>
          {isUserLoggedIn && <Home />}
          {!isUserLoggedIn && <Redirect to="/auth" />}
        </Route>
        <Route path="/home">
          {isUserLoggedIn && <Home />}
          {!isUserLoggedIn && <Redirect to="/auth" />}
        </Route>
        <Route path="/auth">
          {!isUserLoggedIn && <AuthForm />}
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
