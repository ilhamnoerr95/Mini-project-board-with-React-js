import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { Modal, Button } from "react-bootstrap";
// eslint-disable-next-line no-unused-vars
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addGroup } from "redux/Todos/Todos";
// import { actionLoading } from "redux/Utils/Utils";

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
        // dispatch(actionLoading(true));
        setShow(false);
        navigate("/todo");
        setTimeout(() => window.location.reload(), 500);
      }, 500);
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
    </>
  );
};

export default Modals;
