import { useState } from "react";
import { useSelector } from "react-redux";
import { selectGroup } from "redux/Todos/Todos";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

// eslint-disable-next-line no-unused-vars
let clickTask = (param) => {
  return console.log(param.id);
};

const TodoItem = () => {
  const dataGroup = useSelector(selectGroup);
  // eslint-disable-next-line no-unused-vars
  const [group, setGroup] = useState("");

  //   for (let i = 0; i < dataGroup.length; i++) {
  //     let data = dataGroup[i];
  //     console.log(data);
  //   }

  //   console.log(clickTask);
  return (
    <>
      {dataGroup.map((data) => {
        return (
          <div key={data.id} className="col-3 box mx-2 my-4">
            <p className="bx-group text-center">{data.title}</p>
            <p className="desc">{data.description}</p>
            <button
              type="button"
              className="bx-task"
              onClick={() => clickTask(data)}
            >
              <FontAwesomeIcon
                icon={faPlusCircle}
                color="#4DB5BC"
                className="me-2"
              />
              <span>New Task</span>
            </button>
          </div>
        );
      })}
    </>
  );
};

export default TodoItem;
