import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { thanks } from "../../redux/actions/feedbackAction";


const Thanks = () => {

    const dispatch = useDispatch();


    const handleLeave = () => {
      dispatch(thanks())
    }
  return (
    <div>
      <div>
        <h1>Feedback!</h1>
      </div>

      <div>
        <h1>Thank You!</h1>
      <Link to='/'>
      <Button  onClick={handleLeave} className="btn-thanks" variant="primary" type="submit">
          next
        </Button>
      </Link> 
    
      </div>
    </div>
  );
};

export default Thanks;
