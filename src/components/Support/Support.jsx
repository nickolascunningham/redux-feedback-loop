import React from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { handleNext } from "../../redux/actions/feedbackAction";

const Support = ({ handleChange}) => {

    const { support } = useSelector((state) => state.feedback);

    const dispatch = useDispatch();
  return (
    <div className="container">
      <h1>How well are you being supported?</h1>
      <div className="formContainer">
        <Form className="form">
          <Form.Group className="mb-3">
            <Form.Label>support?</Form.Label>
            <Form.Control
              name="support"
              onChange={handleChange}
              type="number"
              placeholder="Enter support"
            />
          </Form.Group>
        </Form>

        <Button disabled={support === "" ? true : false} onClick={() => dispatch(handleNext())} className="btn-next" variant="primary" type="submit">
          next
        </Button>
      </div>
    </div>
  );
};

export default Support;
