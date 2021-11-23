import React from 'react'
import {Form, Button} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { handleNext } from '../../redux/actions/feedbackAction';


const Feelings = ({handleChange}) => {

    const { feeling } = useSelector((state) => state.feedback);

    const dispatch = useDispatch()

    return (
        <div className="container">

       <h1>How are you feeling today?</h1>
       <div className="formContainer">
        <Form className="form">
  <Form.Group className="mb-3" >
    <Form.Label>Feelings?</Form.Label>
    <Form.Control name="feeling" onChange={handleChange} type="number" placeholder="Enter feelings" />
 
  </Form.Group>
</Form>

<Button disabled={feeling === "" ? true : false} onClick={() => dispatch(handleNext())} className="btn-next" variant="primary" type="submit">
    next
  </Button>
  </div>
</div>
    )
}

export default Feelings
