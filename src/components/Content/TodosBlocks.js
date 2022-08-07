import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGroup, setToken, selectGroup } from "redux/Todos/Todos";
import TodoItem from "./TodoItem";

import "./_todo.scss";

function TodosItem() {
  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const itemGroup = useSelector(selectGroup);
  const [text, setText] = useState({
    task: "",
    progress: "",
  });

  // eslint-disable-next-line no-unused-vars
  const handleTask = (e, input) => {
    let value = e.target.value;
    setText({ ...text, [input]: value });
  };

  useEffect(() => {
    dispatch(setToken(JSON.parse(localStorage.getItem("token"))));
    dispatch(getGroup());
  }, [itemGroup]);

  // console.log(text.task, text.progress);
  // useEffect(() => {
  //   dispatch(getGroup());
  // }, []);

  return (
    <>
      <div className="container-fluid row">
        <TodoItem
          data={itemGroup}
          setText={setText}
          text={text}
          handleTask={handleTask}
        />
        ;
      </div>
    </>
  );
}

export default TodosItem;
