import React from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { handleNext } from "../../redux/actions/feedbackAction";

const Comment = ({ handleChange }) => {
  const { comments } = useSelector((state) => state.feedback);

  const dispatch = useDispatch();

  return (
    <div className="container">
      <h1>How well are you being Commented?</h1>
      <div className="formContainer">
        <Form className="form">
          <Form.Group className="mb-3">
            <Form.Label>Any comments you want to leave?</Form.Label>
            <Form.Control
              name="comments"
              onChange={handleChange}
              type="text"
              placeholder="Enter Comment"
            />
          </Form.Group>
        </Form>

        <Button
          disabled={comments === "" ? true : false}
          onClick={() => dispatch(handleNext())}
          className="btn-next"
          variant="primary"
          type="submit"
        >
          next
        </Button>
      </div>
    </div>
  );
};

export default Comment;
