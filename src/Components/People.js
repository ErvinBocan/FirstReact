import React from 'react';

import { Card, Button, Container } from 'react-bootstrap';

const people = ({ name, text, image, key }) => {
  return (
    <Container className='CardContainer w-25 ' fluid={true}>
      <Card className='Card' style={{ width: '18rem' }}>
        <Card.Img className='imageCard' variant='top' src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{text}</Card.Text>
          <Button variant='primary' key={key}>
            About {name}
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default people;
