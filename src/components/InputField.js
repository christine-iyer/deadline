import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function BasicExample({
     createBlog,
     blog,
     handleChange

}) {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Create Entry</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicURL">
        <Form.Label>Link</Form.Label>
        <Form.Control type="text" placeholder="Link" />
      </Form.Group>

      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label className='NewEntry'>Default file input example</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
      <Button onSubmit={handleChange}></Button>
      
    </Form>
  );
}

