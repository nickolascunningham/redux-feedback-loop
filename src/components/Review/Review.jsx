import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { submitFeedback } from "../../redux/actions/feedbackAction";

const Review = () => {
  const { feeling, understanding, support, comments } = useSelector(
    (state) => state.feedback
  );

  const values ={
      feeling,
      understanding,
      support,
      comments
  }

  const dispatch = useDispatch()
  return (
    <div className='review'>
      <h1>Review Your Feedback</h1>

      <ul>
        <li>Feelings: {feeling}</li>
        <li>Understanding: {understanding}</li>
        <li>Support: {support}</li>
        <li>Comments: {comments}</li>
      </ul>

      <Link to='/5'>  <Button
         onClick={() => dispatch(submitFeedback(values))}
        className="btn-submit"
        variant="primary"
        type="submit"
      >
        Submit
      </Button>
      </Link>
    </div>

  );
};

export default Review;
