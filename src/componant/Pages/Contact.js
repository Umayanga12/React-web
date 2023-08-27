import React from 'react'
import Form from 'react-bootstrap/Form';
import './style/Contact.css'
export default function Contact() {
  return (

    <div className='contact_send_em'>
      <h1 className='titles'>Contact Us</h1>
       <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
    </div>
    
  )
}
