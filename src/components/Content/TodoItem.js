import { useState } from "react";
import { useSelector } from "react-redux";
import { selectGroup } from "redux/Todos/Todos";

import { Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

const TodoItem = () => {
  const dataGroup = useSelector(selectGroup);
  // eslint-disable-next-line no-unused-vars
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  // eslint-disable-next-line no-unused-vars
  let clickTask = (param) => {
    console.log(param.id);
    setShow(true);
  };
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
      <Modal className="myModal" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-2 row">
            <label
              htmlFor="validationCustomGroup"
              className="col-sm-4 col-form-label"
            >
              Task Name
            </label>
            <div className="col-sm-8 input-group">
              <input
                type="text"
                className="form-control inputGroup"
                placeholder="Type your Task"
                // onChange={(e) => handleGroup(e, "group")}
                // value={text.group}
                required
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label
              htmlFor="validationCustomGroup"
              className="col-sm-12 col-form-label"
            >
              Progress
            </label>
            <div className="col-sm-8 input-group input-progress">
              <input
                style={{ width: "143px" }}
                type="number"
                min="0"
                max="100"
                className="form-control inputGroup"
                placeholder="Type your progress"
                // onChange={(e) => handleGroup(e, "desc")}
                // value={text.desc}
                required
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            variant="white"
            type="button"
            className="btn close"
            onClick={handleClose}
          >
            Close
          </button>
          <button
            style={{ color: "white" }}
            className="btn"
            onClick={clickTask}
          >
            Save Task
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default TodoItem;
