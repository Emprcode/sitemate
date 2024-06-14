import { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { updateIssue } from "./axiosHelper";

export const UpdateIssueForm = ({ fetchIssues, _id }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [updateDt, setUpdateDt] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdateDt({
      ...updateDt,
      _id,
      [name]: value,
    });
  };
  console.log(updateDt);
  //update issue

  const handleUpdate = async (e) => {
    e.preventDefault();
    const { status, result } = await updateIssue(updateDt);
    console.log(result);
    status === "success" && fetchIssues();
  };

  return (
    <>
      <Button variant="warning" onClick={handleShow}>
        Update
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Issue update</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex justify-content-center">
            <Form onSubmit={handleUpdate}>
              <Form.Group className="mb-3">
                <Form.Label>Id</Form.Label>
                <Form.Control
                  type="text"
                  name="id"
                  placeholder="Enter Id"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  placeholder="Enter title"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  name="description"
                  placeholder="Enter description"
                  onChange={handleChange}
                />
              </Form.Group>

              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" type="submit">
                  Save
                </Button>
              </Modal.Footer>
            </Form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
