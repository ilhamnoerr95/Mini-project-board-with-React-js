import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// eslint-disable-next-line no-unused-vars
import { getGroup, setToken, selectGroup } from "redux/Todos/Todos";
import TodoItem from "./TodoItem";

import "./_todo.scss";
// const emptyArray = [];

function TodosItem() {
  const [loadingScreen, setLoading] = useState(false);

  const itemGroup = useSelector(selectGroup);
  // eslint-disable-next-line no-unused-vars
  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const [text, setText] = useState({
    task: "",
    progress: "",
  });

  // eslint-disable-next-line no-unused-vars
  const handleTask = (e, input) => {
    let value = e.target.value;
    setText({ ...text, [input]: value });
  };

  const callFunction = () => {
    dispatch(getGroup());
  };
  const callData = () => {
    return itemGroup;
  };
  useEffect(() => {
    callFunction();
    callData();
    setTimeout(() => {
      setLoading(true);
    }, 2000);
    // dispatch(setToken(JSON.parse(localStorage.getItem("token"))));
    // for (let i = 0; i < itemGroup.length; i++) {
    //   let data = itemGroup[i];
    //   console.log(data);
    // }
  }, []);

  console.log(itemGroup);

  return (
    <>
      <div className="container-fluid row">
        {!loadingScreen ? (
          <div style={{ height: "70vh" }}>
            <div className="loader mx-auto my-auto"></div>
          </div>
        ) : (
          <TodoItem
            data={itemGroup}
            setText={setText}
            text={text}
            handleTask={handleTask}
          />
        )}
      </div>
    </>
  );
}

export default TodosItem;
