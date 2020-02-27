import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      disabled: 'false',
      emailSent: 'null'
    };
  }

  handleChange = event => {
    const target = event.target;
    const value = target.type === 'CheckBox' ? target.checked : target.value;
    const name = target.name;

    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.PreventDeFault();

    this.setState({ disabled: true });
  };

  render() {
    return (
      <Container fluid={true} className=''>
        <h1 className='center'>Contact</h1>
        <p>Email to us </p>
        <div className='container form d-flex justify-content-between flex-wrap '>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId='formGroupEmail'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='text'
                id='full-name'
                placeholder='Enter Name'
                value={this.name}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId='formGroupPassword'>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type='email'
                id='email'
                placeholder='Enter email'
                value={this.email}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId='formGroupPassword'>
              <Form.Label>Write to us</Form.Label>
              <Form.Control
                type='textarea'
                rows='3'
                id='message'
                placeholder='Enter message'
                value={this.message}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Button
              className='d-inline-block'
              variant='primary'
              type='submit'
              disable={this.disable}
            >
              Send
            </Button>
            {this.state.emailSent === true && (
              <p className='d-inline success-msg'>Email Sent</p>
            )}
            {this.state.emailSent === false && (
              <p className='d-inline error-msg'>!Email Not Sent</p>
            )}
          </Form>
        </div>
      </Container>
    );
  }
}
export default Contact;
