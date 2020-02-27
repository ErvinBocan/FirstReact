import React, { useState } from 'react';

import People from '../Components/People';
import bgimage from '../Images/team.jpg'; // JUmbotron

//import team from '../Images/team.jpg';
import { Button, Container, Jumbotron } from 'react-bootstrap';
import man1 from '../Images/man1.jpg';
import man2 from '../Images/man2.jpg';
import woman from '../Images/woman.jpg';

const Home = props => {
  const [people] = useState([
    {
      image: man1,
      name: 'John Doe',
      text: 'Wordpress developer with 4 years expirience',
      id: '1'
    },
    {
      image: woman,
      name: 'Maria Schnaider',
      text: 'Php developer, Laraver is my passion',
      id: '2'
    },
    {
      image: man2,
      name: 'Dennis Mandal',
      text: 'React developer with 2 years expirience, JS rocks!',
      id: '3'
    }
  ]);

  return (
    <Container className='p-0' fluid={true}>
      <Jumbotron
        className='vh-100 text-white jumbotron d-flex flex-column justify-content-center align-content-center'
        style={{ backgroundImage: `url(${bgimage})`, backgroundSize: 'cover' }}
      >
        <h1>Hello, world!</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <p>
          <Button variant='primary'>Learn more</Button>
        </p>
      </Jumbotron>
      <div className='HomeContent'>
        <h1>OUR TEAM!</h1>
        <p>We are remote Developers</p>
        <div className='containerPeople d-flex justify-content-between  '>
          {people.map(people => (
            <People
              name={people.name}
              text={people.text}
              image={people.image}
              key={people.id}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};
export default Home;
