import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGroup, setToken, selectGroup } from "redux/Todos/Todos";

import "./_todo.scss";

function TodosItem() {
  const dispatch = useDispatch();
  const dataGroup = useSelector(selectGroup);
  useEffect(() => {
    console.log();
    dispatch(setToken(JSON.parse(localStorage.getItem("token"))));
    dispatch(getGroup());
  }, []);

  return (
    <>
      <div className="container-fluid row">
        {dataGroup.map((data) => (
          <div key={data.id} className="col-3 box mx-2 my-4">
            ayam
          </div>
        ))}
      </div>
    </>
  );
}

export default TodosItem;
