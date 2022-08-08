import { Route, Routes as Switch } from "react-router-dom";
import TodosBlocks from "components/Content";
const Routes = () => {
  return (
    <>
      <Switch>
        <Route index element={<TodosBlocks />}></Route>
      </Switch>
    </>
  );
};

export default Routes;
