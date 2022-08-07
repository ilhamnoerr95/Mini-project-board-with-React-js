import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { Modal, Button } from "react-bootstrap";
// eslint-disable-next-line no-unused-vars
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addGroup } from "redux/Todos/Todos";

const Modals = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const selModal = useSelector(selectModal);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [text, setText] = useState({
    group: "",
    desc: "",
  });
  // eslint-disable-next-line no-unused-vars
  const handleGroup = (e, input) => {
    let value = e.target.value;
    setText({ ...text, [input]: value });
  };
  // eslint-disable-next-line no-unused-vars
  const saveChanges = (e) => {
    // e.preventDefault();
    if (text.group && text.desc) {
      dispatch(addGroup(text.group, text.desc));
      setTimeout(() => {
        setShow(false);
        navigate("/todo");
      }, 1500);
    }
  };

  return (
    <>
      <Button onClick={handleShow}>
        <span>+</span> Add New Group
      </Button>
      <Modal className="myModal" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Group</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-2 row">
            <label
              htmlFor="validationCustomGroup"
              className="col-sm-4 col-form-label"
            >
              Group Name
            </label>
            <div className="col-sm-8 input-group">
              <input
                type="text"
                className="form-control inputGroup"
                placeholder="Type your Group"
                onChange={(e) => handleGroup(e, "group")}
                value={text.group}
                required
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label
              htmlFor="validationCustomGroup"
              className="col-sm-4 col-form-label"
            >
              Input Description
            </label>
            <div className="col-sm-8 input-group">
              <input
                type="text"
                className="form-control inputGroup"
                placeholder="Type your Description"
                onChange={(e) => handleGroup(e, "desc")}
                value={text.desc}
                required
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="white"
            type="button"
            className="btn close"
            onClick={handleClose}
          >
            Close
          </Button>
          <Button className="btn" onClick={saveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      {/* <button
        type="button"
        className="btn btn-primary btn-md"
        data-bs-toggle="modal"
        data-bs-target="#myModal"
      >
        <span>+</span> Add New Group
      </button>
      <div
        className="modal fade"
        id="myModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Create New Group
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-3 row">
                <label
                  htmlFor="validationCustomGroup"
                  className="col-sm-4 col-form-label"
                >
                  Group Name
                </label>
                <div className="col-sm-8 input-group">
                  <input
                    type="text"
                    className="form-control"
                    id="inputGroup"
                    placeholder="Type your Group"
                    onChange={(e) => handleGroup(e, "group")}
                    value={text.group}
                    required
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label
                  htmlFor="validationCustomGroup"
                  className="col-sm-4 col-form-label"
                >
                  Input Description
                </label>
                <div className="col-sm-8 input-group">
                  <input
                    type="text"
                    className="form-control inputGroup"
                    id="inputGroup"
                    placeholder="Type your Description"
                    onChange={(e) => handleGroup(e, "desc")}
                    value={text.desc}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary close"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className={"btn btn-primary"}
                onClick={saveChanges}
              >
                Save group
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Modals;
