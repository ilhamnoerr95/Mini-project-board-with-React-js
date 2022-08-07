import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getGroup, setToken } from "redux/Todos/Todos";
import TodoItem from "./TodoItem";

import "./_todo.scss";

function TodosItem() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setToken(JSON.parse(localStorage.getItem("token"))));
    dispatch(getGroup());
  }, []);

  return (
    <>
      <div className="container-fluid row">
        <TodoItem />;
      </div>
    </>
  );
}

export default TodosItem;
