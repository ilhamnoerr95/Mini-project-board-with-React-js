// eslint-disable-next-line no-unused-vars
import { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { useSelector, useDispatch } from "react-redux";

import { Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
// eslint-disable-next-line no-unused-vars
import { addTask, getTask } from "redux/Todos/Todos";

const TodoItem = ({ data, text, handleTask }) => {
  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const [show, setShow] = useState(false);
  const [todo_id, setTodoId] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = (param) => {
    setShow(true);
    setTodoId(param.id);
    console.log(param.id);
  };

  // eslint-disable-next-line no-unused-vars
  let clickTask = () => {
    // console.log(param.id);
    if (text.task && text.progress && show) {
      setShow(false);
      dispatch(addTask(text.task, parseInt(text.progress), todo_id));
    }
  };

  // console.log(todo_id);

  return (
    <>
      {data.map((data) => {
        return (
          <div key={data.id} className="col-3 box mx-2 my-4">
            <p className="bx-group text-center">{data.title}</p>
            <p className="desc">{data.description}</p>
            <button
              type="button"
              className="bx-task"
              onClick={() => handleShow(data)}
            >
              <FontAwesomeIcon
                icon={faPlusCircle}
                color="#4DB5BC"
                className="me-2"
              />
              <span>New Task</span>
            </button>
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
                      onChange={(e) => handleTask(e, "task")}
                      value={text.task}
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
                      onChange={(e) => handleTask(e, "progress")}
                      value={text.progress}
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
          </div>
        );
      })}
    </>
  );
};

export default TodoItem;
