import { Route, Routes as Switch } from "react-router-dom";
import TodosItem from "components/Content";
const Routes = () => {
  return (
    <>
      <Switch>
        <Route index element={<TodosItem />}></Route>
      </Switch>
    </>
  );
};

export default Routes;
