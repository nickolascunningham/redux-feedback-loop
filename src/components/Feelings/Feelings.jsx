import React from 'react'
import {Form, Button} from 'react-bootstrap'


const Feelings = ({handleChange}) => {
    return (
        <div className="formContainer">

       <h1>How are you feeling today?</h1>
        <Form className="form">
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Feelings?</Form.Label>
    <Form.Control onChange={handleChange} type="number" placeholder="Enter feelings" />
 
  </Form.Group>


  <Button className="btn-next" variant="primary" type="submit">
    next
  </Button>
</Form>
</div>
    )
}

export default Feelings
