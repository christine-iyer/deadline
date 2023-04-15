import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function BasicExample(props) {
     const [form, setForm] = useState({
          email: "",
          title: "",
          check: false,
          link: ""
     })
     const handleChange = event => {
          setForm({ ...form, [event.target.name]: event.target.value })
     }
     const handleSubmit = event => {
          event.preventDefault()
          console.log(form)
     }
     return (
          <Form onSubmit={handleSubmit}>
               <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Create Entry</Form.Label>
                    <Form.Control
                         type="email"
                         value={form.email}
                         onChange={handleChange}
                         placeholder="Enter email" />
                    <Form.Text className="text-muted">
                         We'll never share your email with anyone else.
                    </Form.Text>
               </Form.Group>

               <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                         type="text"
                         value={form.title}
                         onChange={handleChange}
                         placeholder="Password" />
               </Form.Group>
               <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                         type="checkbox"
                         value='false'
                         onChange={handleChange}
                         label="Check me out" />
               </Form.Group>

               <Form.Group className="mb-3" controlId="formBasicURL">
                    <Form.Label>Link</Form.Label>
                    <Form.Control
                         type="text"
                         value={form.link}
                         onChange={handleChange}
                         placeholder="Link" />
               </Form.Group>

               <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label className='NewEntry'>Default file input example</Form.Label>
                    <Form.Control type="file" />
               </Form.Group>
               <Button onSubmit={handleChange}></Button>
          </Form>
     );
}

