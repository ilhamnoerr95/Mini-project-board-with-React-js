import Header from "components/Header";
import Login from "components/Auth/Login";
import Register from "components/Auth/Register";
import { Route, Routes as Switch } from "react-router-dom";
import RoutesTodo from "Routes";

const CoreLayout = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/todo" element={<Header />}></Route>
      </Switch>

      <Switch>
        <Route path="/" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/todo" element={<RoutesTodo />}></Route>
      </Switch>
    </div>
  );
};

export default CoreLayout;
