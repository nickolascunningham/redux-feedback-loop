import React from 'react'
import {Form, Button} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { handleNext } from '../../redux/actions/feedbackAction';


const Understanding = ({handleChange}) => {

    const { understanding } = useSelector((state) => state.feedback);

    const dispatch = useDispatch()

    return (
        <div className="container">

       <h1>How well are you understanding the content?</h1>
       <div className="formContainer">
        <Form className="form">
  <Form.Group className="mb-3" >
    <Form.Label>Understanding?</Form.Label>
    <Form.Control name="understanding" onChange={handleChange} type="number" placeholder="Enter understanding" />
 
  </Form.Group>
</Form>

<Button disabled={understanding === "" ? true : false} onClick={() => dispatch(handleNext())} className="btn-next" variant="primary" type="submit">
    next
  </Button>
  </div>
</div>
    )
}

export default Understanding
