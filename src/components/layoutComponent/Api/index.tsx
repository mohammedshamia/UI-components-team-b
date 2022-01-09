import React from 'react';
import { Link } from 'react-router-dom';
import { data } from './data';
import Typography from '../../baseComponent/Typography';
import { Container, LI, UL } from './style';

export default function Api() {
  return (
    <Container>
      <Typography variant="h2" bold children="API" />
      <UL>
        {data.map(item => (
          <Link to={item.Link} key={item.id}>
            {' '}
            <LI> {item.Name} </LI>
          </Link>
        ))}
      </UL>
    </Container>
  );
}
